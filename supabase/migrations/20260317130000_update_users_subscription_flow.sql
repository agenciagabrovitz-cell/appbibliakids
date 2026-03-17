-- Create users table if it doesn't exist (ensuring subscription_status is present)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  subscription_status TEXT DEFAULT 'none',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Policies for public.users
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

-- Update the handle_new_user function to sync with auth.users
-- and specifically check for pre-existing subscription by email
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  existing_user_id UUID;
BEGIN
  -- Check if a user row already exists for this email (pre-paid)
  SELECT id INTO existing_user_id FROM public.users WHERE email = NEW.email;

  IF existing_user_id IS NOT NULL THEN
    -- Update existing row with the new Auth ID
    UPDATE public.users 
    SET id = NEW.id,
        updated_at = now()
    WHERE id = existing_user_id;
  ELSE
    -- Create new row in public.users
    INSERT INTO public.users (id, email, subscription_status)
    VALUES (NEW.id, NEW.email, 'none');
  END IF;

  -- Create profile
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));

  -- Create game progress
  INSERT INTO public.game_progress (user_id)
  VALUES (NEW.id);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Re-apply trigger just in case
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
