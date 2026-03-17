-- Create role enum
CREATE TYPE public.app_role AS ENUM ('parent', 'child');

-- User roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS: users can view their own roles
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own roles" ON public.user_roles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Parent-child relationship table
CREATE TABLE public.parent_children (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  child_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (parent_id, child_id)
);
ALTER TABLE public.parent_children ENABLE ROW LEVEL SECURITY;

-- Parents can view their own links
CREATE POLICY "Parents can view their children" ON public.parent_children
  FOR SELECT USING (auth.uid() = parent_id);
CREATE POLICY "Parents can add children" ON public.parent_children
  FOR INSERT WITH CHECK (auth.uid() = parent_id);
CREATE POLICY "Parents can remove children" ON public.parent_children
  FOR DELETE USING (auth.uid() = parent_id);

-- Function to link child by email (security definer to look up auth.users)
CREATE OR REPLACE FUNCTION public.link_child_by_email(_parent_id UUID, _child_email TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _child_id UUID;
BEGIN
  -- Find child user
  SELECT id INTO _child_id FROM auth.users WHERE email = _child_email;
  IF _child_id IS NULL THEN
    RETURN json_build_object('success', false, 'error', 'Conta não encontrada com este email');
  END IF;
  IF _child_id = _parent_id THEN
    RETURN json_build_object('success', false, 'error', 'Você não pode adicionar a si mesmo');
  END IF;
  -- Check if already linked
  IF EXISTS (SELECT 1 FROM parent_children WHERE parent_id = _parent_id AND child_id = _child_id) THEN
    RETURN json_build_object('success', false, 'error', 'Esta criança já está vinculada');
  END IF;
  -- Insert link
  INSERT INTO parent_children (parent_id, child_id) VALUES (_parent_id, _child_id);
  RETURN json_build_object('success', true);
END;
$$;

-- Function for parents to read children's progress (security definer)
CREATE OR REPLACE FUNCTION public.get_children_progress(_parent_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result JSON;
BEGIN
  SELECT json_agg(row_to_json(t)) INTO result
  FROM (
    SELECT
      p.display_name,
      p.avatar_url,
      gp.points,
      gp.stories_read,
      gp.quizzes_completed,
      gp.perfect_quizzes,
      gp.verse_memorized,
      gp.earned_badges,
      gp.updated_at AS last_activity,
      pc.child_id
    FROM parent_children pc
    JOIN profiles p ON p.user_id = pc.child_id
    JOIN game_progress gp ON gp.user_id = pc.child_id
    WHERE pc.parent_id = _parent_id
  ) t;
  RETURN COALESCE(result, '[]'::json);
END;
$$;