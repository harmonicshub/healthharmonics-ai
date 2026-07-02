// HealthHarmonics AI — Terms of Service Page
// Add this as src/Terms.jsx in your project

export default function Terms() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8fafc",
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .legal-section { margin-bottom: 36px; }
        .legal-section h2 { font-size: 17px; font-weight: 700; color: #064e3b; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1.5px solid #d1fae5; }
        .legal-section p { font-size: 14.5px; color: #334155; line-height: 1.8; margin-bottom: 10px; }
        .legal-section ul { padding-left: 20px; margin-bottom: 10px; }
        .legal-section ul li { font-size: 14.5px; color: #334155; line-height: 1.8; margin-bottom: 6px; }
        .highlight-box { background: #fef2f2; border-left: 4px solid #ef4444; border-radius: 8px; padding: 14px 16px; margin: 16px 0; }
        .highlight-box p { color: #991b1b !important; font-weight: 600; margin: 0 !important; }
        a { color: #059669; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
        padding: "32px 24px 28px",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 28 }}>🩺</span>
            <span style={{ color: "#6ee7b7", fontSize: 14, fontWeight: 600 }}>HealthHarmonics AI</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
            Terms of Service
          </h1>
          <p style={{ color: "#a7f3d0", fontSize: 13 }}>
            Last updated: July 1, 2026 &nbsp;·&nbsp; Effective immediately
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>

        <div className="highlight-box">
          <p>⚠️ IMPORTANT: HealthHarmonics AI is not a medical doctor and does not provide medical diagnosis. Always consult a qualified healthcare professional for medical decisions. In an emergency, call 112 immediately.</p>
        </div>

        <div className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using HealthHarmonics AI (the "Service"), whether through our website, WhatsApp channel, or any other platform, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
          <p>These Terms apply to all users of the Service, including visitors, registered users, and community health workers who use HealthHarmonics AI as a reference tool.</p>
        </div>

        <div className="legal-section">
          <h2>2. Description of Service</h2>
          <p>HealthHarmonics AI is an artificial intelligence-powered health information and guidance platform designed to help communities across Nigeria and West Africa access general health information. The Service provides:</p>
          <ul>
            <li>General health information and educational content</li>
            <li>Symptom awareness guidance based on verified sources (WHO, FMOH, MSF)</li>
            <li>Emergency triage alerts that direct users to seek immediate professional care</li>
            <li>Health guidance in multiple languages including English, Nigerian Pidgin, Igbo, Hausa, and Yoruba</li>
            <li>Medication reminders and general wellness information</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Medical Disclaimer — Please Read Carefully</h2>
          <div className="highlight-box">
            <p>HealthHarmonics AI does NOT provide medical advice, diagnosis, or treatment.</p>
          </div>
          <p>The information provided by HealthHarmonics AI is for general informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment from a licensed healthcare provider.</p>
          <p>You should always seek the advice of your physician, nurse, community health worker, or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or received from HealthHarmonics AI.</p>
          <p>If you think you may have a medical emergency, call your local emergency number (112 in Nigeria) or go to the nearest hospital emergency department immediately.</p>
          <p>HealthHarmonics AI, its founders, developers, and partners are not liable for any health outcomes, injuries, or damages resulting from reliance on information provided by the Service.</p>
        </div>

        <div className="legal-section">
          <h2>4. Limitations of Artificial Intelligence</h2>
          <p>You acknowledge and understand that:</p>
          <ul>
            <li>HealthHarmonics AI uses artificial intelligence which may produce inaccurate, incomplete, or outdated information</li>
            <li>The AI cannot physically examine you, review your medical history, or access your medical records</li>
            <li>AI-generated responses are not a replacement for an in-person clinical consultation</li>
            <li>The Service is designed to complement, not replace, access to healthcare professionals</li>
            <li>Information provided may not account for individual medical histories, allergies, or existing conditions</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Permitted Use</h2>
          <p>You may use HealthHarmonics AI for personal, non-commercial health information purposes. You agree not to:</p>
          <ul>
            <li>Use the Service to provide medical advice to others as if you were a licensed healthcare provider</li>
            <li>Misrepresent information from the Service as a medical diagnosis or prescription</li>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to reverse engineer, copy, or replicate the Service</li>
            <li>Send abusive, harmful, or inappropriate messages through the Service</li>
            <li>Use the Service to spread health misinformation</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>6. Accuracy of Information</h2>
          <p>HealthHarmonics AI makes reasonable efforts to ensure that health information provided is accurate, current, and based on verified sources including World Health Organization (WHO) guidelines, Nigeria Federal Ministry of Health (FMOH) protocols, and Médecins Sans Frontières (MSF) clinical guidelines.</p>
          <p>However, we do not warrant that the information provided is complete, accurate, or up to date. Medical knowledge evolves rapidly, and the Service may not always reflect the most current medical research or guidelines.</p>
        </div>

        <div className="legal-section">
          <h2>7. Third-Party Services</h2>
          <p>HealthHarmonics AI uses third-party services to operate, including:</p>
          <ul>
            <li><strong>Anthropic (Claude AI):</strong> Powers the AI responses. Subject to Anthropic's usage policies.</li>
            <li><strong>Twilio:</strong> Powers the WhatsApp messaging channel. Subject to Twilio's terms of service.</li>
            <li><strong>Meta/WhatsApp:</strong> The WhatsApp platform. Subject to WhatsApp's terms of service.</li>
          </ul>
          <p>We are not responsible for the terms, privacy practices, or content of these third-party services.</p>
        </div>

        <div className="legal-section">
          <h2>8. Intellectual Property</h2>
          <p>HealthHarmonics AI, its name, logo, design, and original content are the intellectual property of Harmonics Hub and Technologies, founded by Bassey Harmony Uchenna, Aba, Abia State, Nigeria. All rights reserved.</p>
          <p>The underlying AI technology is provided by Anthropic. Medical knowledge content is derived from publicly available verified health sources and does not claim ownership over source materials.</p>
        </div>

        <div className="legal-section">
          <h2>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, HealthHarmonics AI, Harmonics Hub and Technologies, and their founders, employees, and partners shall not be liable for:</p>
          <ul>
            <li>Any health outcomes, injuries, or death resulting from reliance on information provided by the Service</li>
            <li>Any indirect, incidental, or consequential damages arising from use of the Service</li>
            <li>Service interruptions, errors, or inaccuracies in AI-generated content</li>
            <li>Loss of data or privacy breaches resulting from third-party service failures</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>10. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting. Continued use of the Service after changes constitutes acceptance of the new Terms. We will make reasonable efforts to notify users of significant changes.</p>
        </div>

        <div className="legal-section">
          <h2>11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or use of the Service shall be subject to the jurisdiction of Nigerian courts.</p>
        </div>

        <div className="legal-section">
          <h2>12. Contact</h2>
          <p>If you have questions about these Terms, contact us at:</p>
          <p><strong>Harmonics Hub and Technologies</strong><br />
          Aba, Abia State, Nigeria<br />
          WhatsApp: via the HealthHarmonics AI channel</p>
        </div>

        {/* Footer nav */}
        <div style={{
          borderTop: "1.5px solid #e2e8f0",
          paddingTop: 24,
          marginTop: 40,
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
        }}>
          <a href="/">← Back to HealthHarmonics AI</a>
          <a href="/privacy">Privacy Policy →</a>
        </div>
      </div>
    </div>
  );
}
