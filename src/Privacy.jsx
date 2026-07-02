// HealthHarmonics AI — Privacy Policy Page
// Add this as src/Privacy.jsx in your project

export default function Privacy() {
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
        .green-box { background: #f0fdf4; border-left: 4px solid #059669; border-radius: 8px; padding: 14px 16px; margin: 16px 0; }
        .green-box p { color: #065f46 !important; font-weight: 500; margin: 0 !important; }
        a { color: #059669; text-decoration: none; }
        a:hover { text-decoration: underline; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
        th { background: #064e3b; color: #fff; padding: 10px 14px; text-align: left; font-weight: 600; }
        td { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #334155; vertical-align: top; }
        tr:nth-child(even) td { background: #f8fafc; }
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
            Privacy Policy
          </h1>
          <p style={{ color: "#a7f3d0", fontSize: 13 }}>
            Last updated: July 1, 2026 &nbsp;·&nbsp; Effective immediately
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 80px" }}>

        <div className="green-box">
          <p>✅ HealthHarmonics AI does not sell your personal data to third parties. Health conversations are used only to provide you with guidance and improve the service.</p>
        </div>

        <div className="legal-section">
          <h2>1. Who We Are</h2>
          <p>HealthHarmonics AI is operated by <strong>Harmonics Hub and Technologies</strong>, founded by Bassey Harmony Uchenna, based in Aba, Abia State, Nigeria. We are committed to protecting your privacy and handling your data responsibly, especially given the sensitive nature of health information.</p>
          <p>This Privacy Policy explains what data we collect, how we use it, and your rights regarding your personal information when you use HealthHarmonics AI via our website or WhatsApp channel.</p>
        </div>

        <div className="legal-section">
          <h2>2. Information We Collect</h2>
          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>What It Includes</th>
                <th>How It's Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Phone number</strong></td>
                <td>Your WhatsApp number (e.g. +234...)</td>
                <td>Automatically when you message us on WhatsApp</td>
              </tr>
              <tr>
                <td><strong>Messages</strong></td>
                <td>The health questions and symptoms you describe</td>
                <td>When you send messages to the Service</td>
              </tr>
              <tr>
                <td><strong>Language preference</strong></td>
                <td>Your chosen language (English, Pidgin, etc.)</td>
                <td>When you select a language</td>
              </tr>
              <tr>
                <td><strong>Session data</strong></td>
                <td>Conversation history within a session (30 min)</td>
                <td>Automatically during your conversation</td>
              </tr>
              <tr>
                <td><strong>Usage data</strong></td>
                <td>Number of messages, time of use, general location region</td>
                <td>Automatically via server logs</td>
              </tr>
            </tbody>
          </table>
          <p>We do <strong>not</strong> collect your full name, government ID, financial information, or precise GPS location unless you voluntarily provide them in a message.</p>
        </div>

        <div className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information collected for the following purposes:</p>
          <ul>
            <li><strong>To provide the Service:</strong> Your messages are sent to Anthropic's Claude AI to generate health guidance responses</li>
            <li><strong>To maintain conversation context:</strong> Session history is kept temporarily (30 minutes) so the AI can provide coherent, contextual responses</li>
            <li><strong>To improve the Service:</strong> Anonymised usage patterns help us understand which health topics are most needed and improve our medical knowledge base</li>
            <li><strong>To ensure safety:</strong> Server logs help us detect abuse, errors, or system failures</li>
            <li><strong>For clinical review:</strong> Anonymised conversation samples may be reviewed by our medical advisor to assess accuracy</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. How Long We Keep Your Data</h2>
          <ul>
            <li><strong>Active session data:</strong> Deleted automatically after 30 minutes of inactivity</li>
            <li><strong>Server logs:</strong> Retained for up to 30 days for security and debugging purposes</li>
            <li><strong>Anonymised usage statistics:</strong> Retained indefinitely for service improvement</li>
            <li><strong>WhatsApp message data:</strong> Subject to Twilio's and Meta's data retention policies</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Who We Share Your Data With</h2>
          <p>We share your data with the following third-party services only as necessary to operate HealthHarmonics AI:</p>
          <table>
            <thead>
              <tr>
                <th>Third Party</th>
                <th>Purpose</th>
                <th>Data Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Anthropic</strong></td>
                <td>AI response generation</td>
                <td>Your message content (not your phone number)</td>
              </tr>
              <tr>
                <td><strong>Twilio</strong></td>
                <td>WhatsApp message delivery</td>
                <td>Your phone number and message content</td>
              </tr>
              <tr>
                <td><strong>Render</strong></td>
                <td>Server hosting</td>
                <td>Server logs (IP address, timestamps)</td>
              </tr>
              <tr>
                <td><strong>Vercel</strong></td>
                <td>Website hosting</td>
                <td>Anonymous browser and usage data</td>
              </tr>
            </tbody>
          </table>
          <p>We do <strong>not</strong> sell, rent, or trade your personal data to advertisers, data brokers, or any other third parties.</p>
        </div>

        <div className="legal-section">
          <h2>6. Sensitive Health Information</h2>
          <p>We recognise that health information is particularly sensitive. We take the following precautions:</p>
          <ul>
            <li>Health conversations are not linked to your identity beyond your phone number</li>
            <li>Conversation content is not shared with employers, insurers, government agencies, or family members</li>
            <li>Clinical reviewers who access sample conversations do so under strict confidentiality agreements</li>
            <li>We do not use your health data for targeted advertising</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>7. Data Security</h2>
          <p>We implement reasonable technical and organisational measures to protect your data, including:</p>
          <ul>
            <li>All data transmitted between your device and our servers is encrypted using HTTPS/TLS</li>
            <li>Twilio webhook requests are validated using cryptographic signatures to prevent spoofing</li>
            <li>API keys and credentials are stored as environment variables, never in source code</li>
            <li>Access to server logs and databases is restricted to authorised personnel only</li>
          </ul>
          <p>However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>
        </div>

        <div className="legal-section">
          <h2>8. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to know:</strong> You can ask us what data we hold about you</li>
            <li><strong>Right to deletion:</strong> You can request that we delete your data from our systems</li>
            <li><strong>Right to opt out:</strong> You can stop using the Service at any time by simply not messaging the WhatsApp number</li>
            <li><strong>Right to correction:</strong> If you believe we hold inaccurate data about you, you can request correction</li>
          </ul>
          <p>To exercise any of these rights, contact us via the HealthHarmonics AI WhatsApp channel or email.</p>
        </div>

        <div className="legal-section">
          <h2>9. Children's Privacy</h2>
          <p>HealthHarmonics AI is not directed at children under the age of 13. We do not knowingly collect personal data from children under 13. If a parent or guardian believes their child has provided us with personal information, please contact us and we will delete it promptly.</p>
          <p>For health questions concerning children, we encourage parents and caregivers to use the Service on behalf of their child.</p>
        </div>

        <div className="legal-section">
          <h2>10. WhatsApp and Third-Party Platforms</h2>
          <p>When you use HealthHarmonics AI via WhatsApp, your use is also governed by:</p>
          <ul>
            <li>WhatsApp's Privacy Policy (whatsapp.com/legal/privacy-policy)</li>
            <li>Meta's Data Policy (facebook.com/privacy/policy)</li>
            <li>Twilio's Privacy Policy (twilio.com/en-us/legal/privacy)</li>
          </ul>
          <p>We encourage you to review these policies as they apply to how WhatsApp handles your messages on their platform.</p>
        </div>

        <div className="legal-section">
          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on our website with a new "Last updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className="legal-section">
          <h2>12. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, contact us:</p>
          <p>
            <strong>Harmonics Hub and Technologies</strong><br />
            Aba, Abia State, Nigeria<br />
            WhatsApp: via the HealthHarmonics AI channel<br />
            Subject line: "Privacy Request"
          </p>
          <p>We will respond to all privacy requests within 14 business days.</p>
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
          <a href="/terms">Terms of Service →</a>
        </div>
      </div>
    </div>
  );
}
