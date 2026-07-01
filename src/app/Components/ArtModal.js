"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../modals.module.css";


export default function ArtModal({
  images = [],
  label = "artwork",
  title = "gallery.exe",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setIndex(0);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // keyboard nav
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function goTo(i) {
    setIndex(i);
  }

  // swipe support
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      deltaX < 0 ? next() : prev();
    }
    touchStartX.current = null;
  }

  return (
    <>
      <button className={styles.cardTrigger} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open &&
        mounted &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div
              className={`${styles.modal} ${styles.galleryModal}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.close} onClick={() => setOpen(false)}>
                ×
              </button>

              <div className={styles.windowBar}>
                <span>{title}</span>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.carouselStage}>
                <div
                  className={styles.carouselViewport}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {images.map((img, i) => (
                      <div className={styles.carouselSlide} key={i}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt || `slide ${i + 1}`}
                          className={styles.carouselImage}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                      onClick={prev}
                      aria-label="previous slide"
                    >
                      ‹
                    </button>
                    <button
                      className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                      onClick={next}
                      aria-label="next slide"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className={styles.carouselFooter}>
                <span className={styles.carouselCounter}>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </span>

                <div className={styles.carouselDots}>
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.carouselDot} ${
                        i === index ? styles.carouselDotActive : ""
                      }`}
                      onClick={() => goTo(i)}
                      aria-label={`go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}