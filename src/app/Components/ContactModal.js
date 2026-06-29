"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../modals.module.css";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button className={styles.cardTrigger} onClick={() => setOpen(true)}>
        contact me
      </button>
      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              {/* WINDOW BAR */}
              <div className={styles.windowBar}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>
                CONTACT.EXE
                <span
                  style={{
                    fontSize: "0.55rem",
                    color: "#444",
                    letterSpacing: "0.1em",
                  }}
                >
                  v1.0
                </span>
              </div>

              {/* CLOSE */}
              <button className={styles.close} onClick={() => setOpen(false)}>
                ✕
              </button>

              {/* CONTENT */}
              <div className={styles.content}>
                <span className={styles.badge}>[ GET IN TOUCH ]</span>
                <h2>
                  let's
                  <br />
                  connect<span style={{ color: "#00ff66" }}>_</span>
                </h2>
                <p>
                  available for web design, development, digital art
                  commissions, and creative consultation. fill out the form
                  below and i'll get back to you within 48 hours.
                </p>

                {/* INFO GRID */}
                <div className={styles.grid}>
                  <div>
                    <h3>✦ email</h3>
                    <p>ashley@xbrainstewx.com</p>
                  </div>
                  <div>
                    <h3>✦ based in</h3>
                    <p>Los Angeles, CA</p>
                  </div>
                  <div>
                    <h3>✦ response time</h3>
                    <p>within 48 hours</p>
                  </div>
                  <div>
                    <h3>✦ availability</h3>
                    <p>open for projects</p>
                  </div>
                </div>

                {/* FORM */}
                {status === "sent" ? (
                  <div
                    style={{
                      marginTop: "24px",
                      padding: "18px 16px",
                      border: "1px solid #00ff66",
                      color: "#00ff66",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textShadow: "0 0 8px rgba(0,255,102,0.5)",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    ✦ MESSAGE SENT. I'LL BE IN TOUCH SOON.
                  </div>
                ) : (
                  <div
                    style={{
                      marginTop: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {/* NAME + EMAIL row */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "14px",
                      }}
                    >
                      {[
                        {
                          label: "NAME",
                          name: "name",
                          type: "text",
                          placeholder: "your name",
                        },
                        {
                          label: "EMAIL",
                          name: "email",
                          type: "email",
                          placeholder: "your@email.com",
                        },
                      ].map(({ label, name, type, placeholder }) => (
                        <div
                          key={name}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                          }}
                        >
                          <label
                            style={{
                              fontSize: "0.52rem",
                              fontWeight: 700,
                              letterSpacing: "0.22em",
                              color: "#00ff66",
                              textShadow: "0 0 6px rgba(0,255,102,0.4)",
                            }}
                          >
                            {label}
                          </label>
                          <input
                            type={type}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            style={inputStyle}
                          />
                        </div>
                      ))}
                    </div>

                    {/* SUBJECT */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.52rem",
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          color: "#00ff66",
                          textShadow: "0 0 6px rgba(0,255,102,0.4)",
                        }}
                      >
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="web design / art commission / other"
                        style={inputStyle}
                      />
                    </div>

                    {/* MESSAGE */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.52rem",
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          color: "#00ff66",
                          textShadow: "0 0 6px rgba(0,255,102,0.4)",
                        }}
                      >
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="tell me about your project..."
                        rows={5}
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: "120px",
                          lineHeight: 1.6,
                        }}
                      />
                    </div>

                    {status === "error" && (
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.72rem",
                          color: "#ff0099",
                          letterSpacing: "0.12em",
                        }}
                      >
                        ✕ something went wrong — email directly at
                        ashley@xbrainstewx.com
                      </p>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={status === "sending"}
                      className={styles.aboutButton}
                      style={{ marginTop: "4px", alignSelf: "flex-start" }}
                    >
                      {status === "sending" ? "SENDING_" : "SEND MESSAGE ✦"}
                    </button>
                  </div>
                )}

                {/* FOOTER TAGS */}
                <div className={styles.footer}>
                  <strong>WEB DESIGN</strong>
                  <strong>DEVELOPMENT</strong>
                  <strong>DIGITAL ART</strong>
                  <strong>CONSULTATION</strong>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

const inputStyle = {
  background: "#000000",
  border: "1px solid rgba(255, 0, 153, 0.35)",
  color: "#ffffff",
  fontFamily: '"Arial", "Helvetica Neue", Helvetica, sans-serif',
  fontSize: "0.82rem",
  padding: "10px 12px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};
