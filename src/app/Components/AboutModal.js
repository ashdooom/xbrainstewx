"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../modals.module.css";

export default function AboutModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button className={styles.cardTrigger} onClick={() => setOpen(true)}>
        about me
      </button>

      {open && mounted && createPortal(
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)}>
              ×
            </button>

            <div className={styles.windowBar}>
              <span>xbrainstewx.exe</span>
              <div className={styles.windowDots}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.badge}>✧ portfolio profile ✧</p>

              <h2>about xbrainstewx</h2>

              <p>
                hi, i’m ashley 🤠 a creative web developer building nostalgic,
                music-inspired digital spaces with a love for neon interfaces,
                expressive layouts, and the early internet.
  
                my work combines frontend development, visual design, and playful
                UI details to create websites that feel personal, emotional, and
                alive.
              </p>

              <div className={styles.grid}>
                <div>
                  <h3>focus</h3>
                  <p>React, Next.js, Firebase, responsive UI, and custom CSS.</p>
                </div>

                <div>
                  <h3>aesthetic</h3>
                  <p>Y2K, emo web, pixel details, glow, glitter, and nostalgia.</p>
                </div>
              </div>

              <div className={styles.footer}>
                <span>currently building:</span>
                <strong>xbrainwavex.fm</strong>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}