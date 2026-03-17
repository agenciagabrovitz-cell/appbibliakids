

## Integração Cakto - Assinatura Mensal

### Visão Geral

Integrar a Cakto para gerenciar assinaturas mensais. O fluxo: usuário clica em "Assinar Premium" → edge function autentica na Cakto e retorna URL do checkout → usuário paga na Cakto → webhook da Cakto notifica o app → banco atualiza status de assinatura → conteúdo premium é liberado.

### Etapas

**1. Armazenar credenciais Cakto como secrets**
- `CAKTO_CLIENT_ID` e `CAKTO_CLIENT_SECRET` usando o tool de secrets

**2. Criar tabela `subscriptions`**
- Colunas: `user_id`, `status` (active/inactive/cancelled), `cakto_order_id`, `plan`, `started_at`, `expires_at`
- RLS: usuários podem ver sua própria assinatura

**3. Edge function `cakto-webhook`**
- Endpoint público (sem JWT) que recebe notificações da Cakto
- Eventos: `purchase_approved` → ativa assinatura, `refunded`/`chargeback` → desativa
- Valida o webhook via secret da Cakto
- Atualiza tabela `subscriptions` usando service role key

**4. Edge function `cakto-checkout`**
- Autenticada (valida JWT do usuário)
- Obtém access_token da Cakto via OAuth2 (`POST /public_api/token/`)
- Retorna a URL do checkout da Cakto para o plano mensal (essa URL já deve existir no painel Cakto — passamos como config)

**5. Frontend: componente de assinatura**
- Botão "Assinar Premium" que chama a edge function e redireciona para o checkout Cakto
- Hook `useSubscription` que verifica status na tabela `subscriptions`
- Conteúdo premium bloqueado para quem não tem assinatura ativa

### Fluxo

```text
Usuário → "Assinar" → Edge Function (cakto-checkout)
                         ↓
                    Redireciona para checkout Cakto
                         ↓
              Usuário paga na Cakto
                         ↓
              Cakto Webhook → Edge Function (cakto-webhook)
                         ↓
              Atualiza tabela subscriptions
                         ↓
              App verifica status → Libera conteúdo premium
```

### Pré-requisito do usuário

Antes de implementar, preciso que você:
1. Tenha um **produto** criado no painel da Cakto com uma oferta de assinatura mensal
2. Me informe a **URL do checkout** desse produto (ou o ID da oferta)
3. Configure o webhook no painel da Cakto apontando para a URL da edge function (que criaremos)

### Arquivos a criar/modificar

| Arquivo | Ação |
|---|---|
| `supabase/functions/cakto-webhook/index.ts` | Criar - recebe webhooks da Cakto |
| `supabase/functions/cakto-checkout/index.ts` | Criar - gera URL de checkout |
| `supabase/config.toml` | Adicionar config das functions |
| Migration SQL | Criar tabela `subscriptions` |
| `src/hooks/useSubscription.ts` | Criar - hook de status |
| `src/components/SubscriptionGate.tsx` | Criar - bloqueio de conteúdo |
| `src/components/SubscribeButton.tsx` | Criar - botão de assinatura |

