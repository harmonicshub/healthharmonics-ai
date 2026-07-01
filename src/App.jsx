import { useState, useRef, useEffect } from "react";

// ─── MEDICAL KNOWLEDGE BASE (RAG simulation – offline-ready content) ───────────
const MEDICAL_KB = `
VERIFIED HEALTH GUIDANCE (Nigeria / West Africa context):

MALARIA:
- Symptoms: Fever, chills, headache, vomiting, muscle pain, fatigue
- Warning signs (go to hospital immediately): High fever above 39°C, convulsions, difficulty breathing, yellow eyes/skin, unconsciousness, inability to drink fluids
- First-line: Artemisinin-based combination therapy (ACT) like Coartem. Only take after confirmed diagnosis.
- Prevention: Sleep under treated mosquito nets, clear stagnant water, use repellents

TYPHOID:
- Symptoms: Sustained high fever, stomach pain, weakness, headache, sometimes rash
- Warning signs: Severe abdominal pain, bleeding, extreme confusion
- Treatment: Requires antibiotics prescribed by a doctor. Do not self-medicate.
- Prevention: Drink clean/boiled water, wash hands before eating

CHOLERA:
- Symptoms: Sudden watery diarrhea (rice-water stool), vomiting, rapid dehydration
- WARNING: This is a medical emergency. Go to hospital immediately.
- First aid while going: Oral Rehydration Solution (ORS) — 1 litre clean water + 6 teaspoons sugar + half teaspoon salt
- Prevention: Clean water, proper sanitation, handwashing

DIARRHEA (general, not cholera):
- ORS is the most important treatment — prevents dehydration
- Warning signs: Blood in stool, diarrhea lasting more than 3 days, signs of dehydration (sunken eyes, dry mouth, no urination), child becomes very weak
- For children: seek care quickly, dehydration is dangerous in under-5s

HIGH BLOOD PRESSURE (Hypertension):
- Often has NO symptoms — that is why it is dangerous
- Symptoms when severe: Headache, blurred vision, chest pain, confusion
- Emergency signs: Sudden severe headache, one-sided weakness/numbness, difficulty speaking — this may be a stroke, call emergency immediately
- Management: Take prescribed medication daily, reduce salt, exercise, avoid alcohol

DIABETES:
- Symptoms: Frequent urination, excessive thirst, blurred vision, wounds that don't heal, fatigue
- Emergency (diabetic crisis): Confusion, shaking, extreme sweating (low sugar) — give sugar/glucose immediately then go to hospital
- Management: Medication, diet control, regular blood sugar checks

RESPIRATORY INFECTIONS / PNEUMONIA:
- Symptoms: Cough, fever, difficulty breathing, chest pain
- Warning signs: Fast breathing, nostril flaring, bluish lips, inability to drink, chest drawing in — EMERGENCY for children
- Prevention: Vaccines (pneumococcal), good ventilation, avoid smoke

MENINGITIS:
- Symptoms: Severe headache, stiff neck, fever, sensitivity to light, rash (sometimes)
- THIS IS A MEDICAL EMERGENCY — go to hospital immediately
- Do not wait or try home remedies

MATERNAL HEALTH:
- Danger signs in pregnancy: Heavy bleeding, severe headache, blurred vision, swollen hands/face, fever, reduced baby movement after 28 weeks, labour before 37 weeks
- ANY of these — go to hospital or call a midwife immediately
- Antenatal care: Minimum 4 visits recommended. Take prescribed supplements (folic acid, iron)

CHILD FEVER:
- Under 3 months with any fever: Go to hospital immediately
- 3 months+ with fever above 38.5°C: Give paracetamol (correct dose for weight), cool the child, seek care if no improvement in 24 hours
- Convulsions from fever: Place child on their side, do not put anything in mouth, go to hospital immediately

SNAKE BITE:
- EMERGENCY: Go to hospital immediately for antivenom
- Keep the person still and calm, immobilise the bitten limb below heart level
- Do NOT cut the bite, suck venom, apply tourniquet, or apply heat

FIRST AID — BURNS:
- Cool the burn immediately with cool (not cold/ice) running water for 10-20 minutes
- Do not apply toothpaste, oil, or butter
- Cover with clean cloth. Seek care for burns larger than palm of hand or on face/hands/genitals

MENTAL HEALTH:
- Depression, anxiety, and trauma are real medical conditions, not spiritual problems
- Signs: Persistent sadness, loss of interest, sleep problems, feeling hopeless, thoughts of self-harm
- Support: Talk to a trusted person, see a doctor or counsellor. You are not alone.
- If someone is thinking of harming themselves: stay with them, listen without judgment, seek help

WHEN TO GO TO HOSPITAL IMMEDIATELY (any of these):
- Difficulty breathing
- Chest pain
- Unconsciousness or confusion
- Convulsions / seizures
- Heavy uncontrolled bleeding
- Signs of stroke (face drooping, arm weak, speech difficulty)
- High fever with stiff neck
- Severe abdominal pain
- Any emergency in a child under 5 or pregnant woman

EMERGENCY NUMBERS (Nigeria):
- LASAMBUS (Lagos): 08000-LASAMBUS / 767
- Federal Road Safety: 122
- Nigerian Red Cross: +234 1 8974 000
- General Emergency: 112
`;

const SYSTEM_PROMPT = `You are HealthHarmonics AI — a compassionate, trustworthy medical guidance assistant designed for communities across Nigeria and West Africa where access to doctors is limited.

YOUR ROLE:
- Provide clear, accurate, easy-to-understand health information
- Help people recognise warning signs early
- Guide people toward appropriate care
- Respond warmly in the user's preferred language (English, Nigerian Pidgin, Igbo, Hausa, Yoruba)

YOUR RULES (NON-NEGOTIABLE):
1. You are NOT a doctor and cannot diagnose. Always say this clearly.
2. For ANY red flag symptom (difficulty breathing, chest pain, unconsciousness, convulsions, heavy bleeding, stroke signs, meningitis signs, child under 3 months with fever, cholera, snake bite), immediately and clearly say: GO TO THE HOSPITAL NOW. Do not soften this.
3. Always end responses with: whether to seek care now, soon, or monitor at home.
4. Never recommend specific prescription drugs or dosages.
5. Always ground your answers in the verified knowledge base provided.
6. Keep language simple — explain as if talking to someone with no medical training.
7. If the user writes in Pidgin, respond in Pidgin. If Igbo, respond in Igbo. Match their language.
8. Show empathy. People are often scared when they ask health questions.

VERIFIED MEDICAL KNOWLEDGE BASE:
${MEDICAL_KB}

RESPONSE FORMAT:
- Start with acknowledgment/empathy (1 sentence)
- Give the key information clearly
- State warning signs if relevant
- End with a clear action: EMERGENCY (go now) / SEE A DOCTOR SOON / MONITOR AT HOME + what to watch for
- Keep responses under 200 words unless the situation is complex

Remember: You may be the only health guidance this person can access today. Be accurate. Be clear. Save lives.`;

// ─── LANGUAGE OPTIONS ────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "en", label: "English", greeting: "Hello! I'm HealthHarmonics AI. How can I help you today?" },
  { code: "pcm", label: "Pidgin", greeting: "How! I be HealthHarmonics AI. Wetin dey worry you today?" },
  { code: "ig", label: "Igbo", greeting: "Nnọọ! Abụ m HealthHarmonics AI. Gwa m ihe ọrịa ị nwere taa." },
  { code: "ha", label: "Hausa", greeting: "Sannu! Ni ne HealthHarmonics AI. Me kake fama da shi yau?" },
  { code: "yo", label: "Yoruba", greeting: "Ẹ káàbọ̀! Mo jẹ HealthHarmonics AI. Kí ni ìṣòro rẹ lónìí?" },
];

const QUICK_PROMPTS = [
  "My child has a high fever",
  "I get serious headache and stiff neck",
  "Signs of malaria",
  "I'm pregnant and I see blood",
  "My BP na 160/100",
  "Watery stool since morning",
];

// ─── CALL CLAUDE API ──────────────────────────────────────────────────────────
async function callHealthAI(messages) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    }),
  });
  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error?.message || "API error");
  }
  const data = await response.json();
  return data.content.map((b) => b.text || "").join("");
}

// ─── URGENCY DETECTOR ────────────────────────────────────────────────────────
function detectUrgency(text) {
  const t = text.toLowerCase();
  const emergency = ["convuls", "unconsci", "not breathing", "heavy bleed", "stroke", "meningit",
    "snake bite", "cholera", "chest pain", "difficulty breath", "no dey breathe", "faint",
    "baby no dey move", "blood plenty", "stiff neck"];
  const urgent = ["high fever", "39", "40", "pregnancy", "pregnant", "child fever",
    "baby sick", "vomit blood", "blood in stool", "no fit drink"];
  if (emergency.some((w) => t.includes(w))) return "emergency";
  if (urgent.some((w) => t.includes(w))) return "urgent";
  return "normal";
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
function UrgencyBadge({ level }) {
  if (level === "emergency") return (
    <span style={{ background: "#ef4444", color: "#fff", fontSize: 11, fontWeight: 700,
      padding: "2px 8px", borderRadius: 99, letterSpacing: 0.5 }}>🚨 EMERGENCY</span>
  );
  if (level === "urgent") return (
    <span style={{ background: "#f97316", color: "#fff", fontSize: 11, fontWeight: 700,
      padding: "2px 8px", borderRadius: 99 }}>⚠️ SEE DOCTOR SOON</span>
  );
  return null;
}

function Message({ msg }) {
  const isUser = msg.role === "user";
  const urgency = !isUser ? detectUrgency(msg.content) : "normal";

  return (
    <div style={{ display: "flex", flexDirection: isUser ? "row-reverse" : "row",
      gap: 10, alignItems: "flex-start", marginBottom: 16 }}>
      {/* Avatar */}
      <div style={{ width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
        background: isUser ? "#0ea5e9" : "#059669", display: "flex",
        alignItems: "center", justifyContent: "center", fontSize: 16, marginTop: 2 }}>
        {isUser ? "👤" : "🩺"}
      </div>

      <div style={{ maxWidth: "78%", display: "flex", flexDirection: "column",
        alignItems: isUser ? "flex-end" : "flex-start", gap: 4 }}>
        {!isUser && urgency !== "normal" && <UrgencyBadge level={urgency} />}
        <div style={{
          background: isUser ? "#0ea5e9" : urgency === "emergency" ? "#fef2f2"
            : urgency === "urgent" ? "#fff7ed" : "#f0fdf4",
          color: isUser ? "#fff" : urgency === "emergency" ? "#991b1b"
            : urgency === "urgent" ? "#9a3412" : "#14532d",
          border: isUser ? "none" : urgency === "emergency" ? "1.5px solid #fca5a5"
            : urgency === "urgent" ? "1.5px solid #fdba74" : "1.5px solid #bbf7d0",
          borderRadius: isUser ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
          padding: "10px 14px", fontSize: 14.5, lineHeight: 1.6,
          whiteSpace: "pre-wrap", wordBreak: "break-word",
        }}>
          {msg.content}
        </div>
        <div style={{ fontSize: 11, color: "#94a3b8" }}>
          {new Date(msg.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#059669",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🩺</div>
      <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: "4px 18px 18px 18px",
        padding: "12px 16px", display: "flex", gap: 5, alignItems: "center" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 7, height: 7, borderRadius: "50%", background: "#059669",
            animation: "pulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function HealthHarmonicsAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);
  const [screen, setScreen] = useState("welcome"); // welcome | chat
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function startChat(selectedLang) {
    setLang(selectedLang);
    setMessages([{ role: "assistant", content: selectedLang.greeting, ts: Date.now() }]);
    setScreen("chat");
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  async function sendMessage(text) {
    const content = text.trim();
    if (!content || loading) return;
    setInput("");
    setError(null);

    const userMsg = { role: "user", content, ts: Date.now() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setLoading(true);

    try {
      const apiMessages = newMessages
        .filter((m) => m.role !== "system")
        .map(({ role, content }) => ({ role, content }));

      // Inject language instruction
      const langInstruction = lang.code !== "en"
        ? `[Respond in ${lang.label}] ` : "";
      apiMessages[apiMessages.length - 1].content = langInstruction + content;

      const reply = await callHealthAI(apiMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply, ts: Date.now() }]);
    } catch (e) {
      setError("Connection issue. Check your internet and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  }

  // ── WELCOME SCREEN ──
  if (screen === "welcome") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'Inter', system-ui, sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
          @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          .lang-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important; }
          .lang-btn { transition: all 0.2s ease !important; }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: transparent; }
          ::-webkit-scrollbar-thumb { background: #bbf7d0; border-radius: 4px; }
        `}</style>

        <div style={{ maxWidth: 480, width: "100%", animation: "fadeUp 0.6s ease" }}>
          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ width: 80, height: 80, borderRadius: 24, background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 40, margin: "0 auto 16px" }}>🩺</div>
            <h1 style={{ color: "#fff", fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>HealthHarmonics AI</h1>
            <p style={{ color: "#6ee7b7", fontSize: 14, marginTop: 6, fontWeight: 500 }}>
              Trusted health guidance · Anytime · Any language
            </p>
          </div>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 28 }}>
            {[
              { icon: "🛡️", label: "Verified Info", sub: "WHO & FMOH guidelines" },
              { icon: "🌍", label: "5 Languages", sub: "Including Pidgin & Igbo" },
              { icon: "🚨", label: "Triage Alerts", sub: "Know when to rush" },
            ].map((c) => (
              <div key={c.label} style={{ background: "rgba(255,255,255,0.08)", borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.12)", padding: "14px 10px", textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{c.icon}</div>
                <div style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{c.label}</div>
                <div style={{ color: "#6ee7b7", fontSize: 10, marginTop: 2 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* Language selection */}
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.12)", padding: 24 }}>
            <p style={{ color: "#d1fae5", fontSize: 13, fontWeight: 600, marginBottom: 14,
              textAlign: "center", letterSpacing: 0.3 }}>SELECT YOUR LANGUAGE</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {LANGUAGES.map((l) => (
                <button key={l.code} className="lang-btn" onClick={() => startChat(l)}
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 12, padding: "13px 18px", cursor: "pointer", color: "#fff",
                    fontSize: 15, fontWeight: 500, textAlign: "left", display: "flex",
                    alignItems: "center", justifyContent: "space-between" }}>
                  <span>{l.label}</span>
                  <span style={{ fontSize: 12, color: "#6ee7b7", fontStyle: "italic" }}>
                    {l.greeting.substring(0, 28)}…
                  </span>
                </button>
              ))}
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center", marginTop: 20, lineHeight: 1.5 }}>
            ⚠️ HealthHarmonics AI provides general health guidance only — not medical diagnosis.<br />
            Always consult a qualified healthcare professional for medical decisions.
          </p>
        </div>
      </div>
    );
  }

  // ── CHAT SCREEN ──
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column",
      background: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1)} }
        .send-btn:hover { background: #047857 !important; }
        .quick-btn:hover { background: #d1fae5 !important; border-color: #059669 !important; }
        .quick-btn { transition: all 0.15s ease !important; }
        textarea:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      `}</style>

      {/* Header */}
      <div style={{ background: "#064e3b", padding: "12px 16px", display: "flex",
        alignItems: "center", gap: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.15)", zIndex: 10 }}>
        <button onClick={() => setScreen("welcome")}
          style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8,
            color: "#6ee7b7", cursor: "pointer", padding: "6px 10px", fontSize: 18 }}>←</button>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#059669",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🩺</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>HealthHarmonics AI</div>
          <div style={{ color: "#6ee7b7", fontSize: 11 }}>
            {lang.label} · {loading ? "Typing…" : "Online"}
          </div>
        </div>
        <div style={{ background: "#ef4444", borderRadius: 8, padding: "6px 10px",
          fontSize: 11, color: "#fff", fontWeight: 700, cursor: "pointer",
          textAlign: "center", lineHeight: 1.3 }}
          onClick={() => window.open("tel:112")}>
          📞 112<br />Emergency
        </div>
      </div>

      {/* Emergency banner */}
      <div style={{ background: "#fef2f2", borderBottom: "1px solid #fca5a5",
        padding: "7px 16px", fontSize: 12, color: "#991b1b", fontWeight: 500, textAlign: "center" }}>
        🚨 If this is a life-threatening emergency, call <strong>112</strong> immediately. Do not wait for AI guidance.
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px" }}>
        {messages.map((msg, i) => <Message key={i} msg={msg} />)}
        {loading && <TypingIndicator />}
        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 10,
            padding: "10px 14px", color: "#991b1b", fontSize: 13, marginBottom: 12 }}>
            ⚠️ {error}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      {messages.length <= 1 && (
        <div style={{ padding: "6px 16px 10px", overflowX: "auto" }}>
          <p style={{ fontSize: 11, color: "#64748b", marginBottom: 8, fontWeight: 600, letterSpacing: 0.3 }}>
            COMMON QUESTIONS
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {QUICK_PROMPTS.map((q) => (
              <button key={q} className="quick-btn" onClick={() => sendMessage(q)}
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 20,
                  padding: "7px 13px", cursor: "pointer", fontSize: 12.5, color: "#065f46",
                  fontWeight: 500, whiteSpace: "nowrap" }}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div style={{ background: "#fff", borderTop: "1px solid #e2e8f0",
        padding: "10px 12px", display: "flex", gap: 10, alignItems: "flex-end" }}>
        <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey} placeholder={
            lang.code === "pcm" ? "Describe wetin dey happen…"
            : lang.code === "ig" ? "Kọọ ihe ọrịa gị…"
            : lang.code === "ha" ? "Bayyana alamun rashin lafiyar ku…"
            : lang.code === "yo" ? "Ṣapejuwe aisan rẹ…"
            : "Describe your symptoms or ask a health question…"}
          rows={1} style={{ flex: 1, border: "1.5px solid #e2e8f0", borderRadius: 14,
            padding: "10px 14px", fontSize: 14, resize: "none", fontFamily: "inherit",
            background: "#f8fafc", color: "#1e293b", lineHeight: 1.5,
            maxHeight: 100, overflowY: "auto" }}
          onInput={(e) => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"; }} />
        <button className="send-btn" onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
          style={{ background: input.trim() && !loading ? "#059669" : "#94a3b8",
            border: "none", borderRadius: 12, padding: "10px 16px", cursor: input.trim() && !loading ? "pointer" : "default",
            color: "#fff", fontSize: 18, transition: "background 0.2s", flexShrink: 0 }}>
          ➤
        </button>
      </div>

      <div style={{ background: "#fff", padding: "4px 16px 10px", fontSize: 10.5,
        color: "#94a3b8", textAlign: "center" }}>
        HealthHarmonics AI · For guidance only · Not a substitute for professional medical care
      </div>
    </div>
  );
}
