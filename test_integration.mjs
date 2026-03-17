/**
 * Teste de Integração Stripe + Supabase
 * - Testa 1: Edge Function online
 * - Testa 2: Tabela users existe
 * - Testa 3: Webhook endpoint aceita requisições Stripe-formatted
 */

const SUPABASE_URL = "https://rnnuctvnmrcddrlrmnyb.supabase.co";
const ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubnVjdHZubXJjZGRybHJtbnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2Nzk4MjEsImV4cCI6MjA4OTI1NTgyMX0.v157YGuaCbnp3uoG-UH7MVY6Jys1EuwSd-WYQjMZ8Ko";

const results = [];

function log(test, status, detail) {
  const icon = status === "PASS" ? "✅" : status === "WARN" ? "⚠️" : "❌";
  console.log(`${icon} ${test}: ${detail}`);
  results.push({ test, status, detail });
}

// ---- Teste 1: Edge Function online ----
async function testEdgeFunctionOnline() {
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/stripe-webhook`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const body = await res.text();
    
    if (res.status === 400 && body.includes("stripe-signature")) {
      log("Edge Function Online", "PASS", `Status ${res.status} — Webhook exige assinatura Stripe (correto!)`);
    } else if (res.status === 401) {
      log("Edge Function Online", "WARN", `Status ${res.status} — Pode faltar configuração de auth. Body: ${body}`);
    } else {
      log("Edge Function Online", "FAIL", `Status ${res.status} — Body: ${body}`);
    }
  } catch (e) {
    log("Edge Function Online", "FAIL", `Erro de conexão: ${e.message}`);
  }
}

// ---- Teste 2: Webhook rejeita sem signature correta ----
async function testWebhookSignatureValidation() {
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/stripe-webhook`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "stripe-signature": "t=1234567890,v1=fake_signature_for_test"
      },
      body: JSON.stringify({
        type: "checkout.session.completed",
        data: { object: { customer_details: { email: "test@test.com" } } }
      }),
    });
    const body = await res.text();
    
    if (res.status === 400 && body.includes("Webhook Error")) {
      log("Validação de Assinatura", "PASS", `Webhook rejeitou assinatura inválida corretamente (${res.status})`);
    } else if (res.status === 200) {
      log("Validação de Assinatura", "WARN", `Webhook aceitou assinatura falsa — verifique STRIPE_WEBHOOK_SECRET`);
    } else {
      log("Validação de Assinatura", "WARN", `Status ${res.status} — Body: ${body.substring(0, 200)}`);
    }
  } catch (e) {
    log("Validação de Assinatura", "FAIL", `Erro: ${e.message}`);
  }
}

// ---- Teste 3: Tabela users acessível ----
async function testUsersTable() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/users?select=id,email,subscription_status&limit=1`, {
      headers: {
        "apikey": ANON_KEY,
        "Authorization": `Bearer ${ANON_KEY}`,
      }
    });
    const body = await res.text();
    
    if (res.status === 200) {
      log("Tabela Users", "PASS", `Tabela acessível (status ${res.status})`);
    } else {
      log("Tabela Users", "FAIL", `Status ${res.status} — Body: ${body.substring(0, 200)}`);
    }
  } catch (e) {
    log("Tabela Users", "FAIL", `Erro: ${e.message}`);
  }
}

// ---- Teste 4: Tabela profiles acessível ----
async function testProfilesTable() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=user_id,display_name&limit=1`, {
      headers: {
        "apikey": ANON_KEY,
        "Authorization": `Bearer ${ANON_KEY}`,
      }
    });
    
    if (res.status === 200) {
      log("Tabela Profiles", "PASS", `Tabela acessível (status ${res.status})`);
    } else if (res.status === 404) {
      log("Tabela Profiles", "WARN", `Tabela não encontrada (404) — pode ainda não existir`);
    } else {
      const body = await res.text();
      log("Tabela Profiles", "WARN", `Status ${res.status} — ${body.substring(0, 100)}`);
    }
  } catch (e) {
    log("Tabela Profiles", "FAIL", `Erro: ${e.message}`);
  }
}

// ---- Teste 5: Tabela game_progress acessível ----
async function testGameProgressTable() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/game_progress?select=user_id&limit=1`, {
      headers: {
        "apikey": ANON_KEY,
        "Authorization": `Bearer ${ANON_KEY}`,
      }
    });
    
    if (res.status === 200) {
      log("Tabela Game Progress", "PASS", `Tabela acessível (status ${res.status})`);
    } else if (res.status === 404) {
      log("Tabela Game Progress", "WARN", `Tabela não encontrada (404) — pode ainda não existir`);
    } else {
      const body = await res.text();
      log("Tabela Game Progress", "WARN", `Status ${res.status} — ${body.substring(0, 100)}`);
    }
  } catch (e) {
    log("Tabela Game Progress", "FAIL", `Erro: ${e.message}`);
  }
}

// ---- Teste 6: Método GET rejeitado pelo webhook ----
async function testWebhookRejectsGet() {
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/stripe-webhook`, {
      method: "GET",
    });
    const body = await res.text();
    
    if (res.status === 405) {
      log("Webhook rejeita GET", "PASS", `Retornou 405 Method Not Allowed (correto!)`);
    } else {
      log("Webhook rejeita GET", "WARN", `Status ${res.status} — ${body.substring(0, 100)}`);
    }
  } catch (e) {
    log("Webhook rejeita GET", "FAIL", `Erro: ${e.message}`);
  }
}

// ---- RUN ALL ----
console.log("🔍 TESTE DE INTEGRAÇÃO STRIPE + SUPABASE");
console.log("=========================================\n");

await testEdgeFunctionOnline();
await testWebhookSignatureValidation();
await testWebhookRejectsGet();
await testUsersTable();
await testProfilesTable();
await testGameProgressTable();

console.log("\n=========================================");
const passed = results.filter(r => r.status === "PASS").length;
const warnings = results.filter(r => r.status === "WARN").length;
const failed = results.filter(r => r.status === "FAIL").length;
console.log(`📊 Resultado: ${passed} ✅ PASS | ${warnings} ⚠️ WARN | ${failed} ❌ FAIL`);

if (failed === 0 && warnings === 0) {
  console.log("\n🎉 TUDO FUNCIONANDO PERFEITAMENTE!");
} else if (failed === 0) {
  console.log("\n👍 Sistema funcional, mas verifique os avisos acima.");
} else {
  console.log("\n🚨 Há problemas que precisam ser corrigidos!");
}
