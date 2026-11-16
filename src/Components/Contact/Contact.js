import { useState } from "react";
import { Check2, Clipboard, Envelope } from "react-bootstrap-icons";
import "./Contact.css";

const EMAIL = "harjinderofficial91@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="card contact-card reveal">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">
          Let's build something <span className="gradient-text">great</span>{" "}
          together.
        </h2>
        <p className="contact-text">
          Have a project, role, or idea in mind? My inbox is always open.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            <Envelope /> {EMAIL}
          </a>
          <button type="button" className="btn btn-ghost" onClick={copyEmail}>
            {copied ? <Check2 /> : <Clipboard />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
