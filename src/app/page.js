"use client";

import AboutModal from "./Components/AboutModal";
import ArtModal from "./Components/ArtModal";
import { useState } from "react";
import CommentsBox from "./Components/Comments";
import styles from "./page.module.css";
import MusicPlayer from "./Components/MusicPlayer";
import Image from "next/image";
import ContactModal from "./Components/ContactModal";

const artworkImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/art/${String(i + 1).padStart(2, "0")}.png`,
  alt: i === 0 ? "xbrainstewx logo" : `artwork ${i}`,
}));

export default function Home() {
  return (
    <div className={styles.page}>
      {/* SCANLINES */}
      <div className={styles.noise} />

      {/* TICKER */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={styles.tickerText}>
              &nbsp;·&nbsp; CREATIVE WEB DEVELOPER ✦ &nbsp;·&nbsp; ✦ DIGITAL
              ARTIST ✦ &nbsp;·&nbsp; DESIGNER &nbsp;·&nbsp; ✦
            </span>
          ))}
        </div>
      </div>

      {/* BRAIN HEADER */}
      <div className={styles.headerBrain}>
        <Image
          src="/dragon.gif"
          alt="pink dragon floating"
          width={300}
          height={250}
          className={styles.pinkDragonL}
          priority
        />

        <Image
          src="/brainZ.png"
          alt="xbrainwavex"
          width={670}
          height={180}
          className={styles.brainImage}
          priority
        />

        <Image
          src="/dragon.gif"
          alt="pink dragon floating"
          width={300}
          height={250}
          className={styles.pinkDragonR}
          priority
        />
      </div>

      {/* MUSIC PLAYER — sits directly above the main column, matched to its width */}
      <div className={styles.playerBarWrap}>
        <MusicPlayer />
      </div>

      {/* MAIN 2-COL */}
      <main className={styles.main}>
        {/* LEFT — photo card */}
        <section className={styles.heroCard}>
          <div className={styles.heroOverlay} />

          {/* STATUS BADGE */}
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            ONLINE
          </div>

          {/* SELFIE */}
          <div className={styles.selfieWrapper}>
            <Image
              src="/selfie2.PNG"
              alt="ashley"
              width={480}
              height={600}
              className={styles.brainSelfie}
            />
          </div>

          {/* BOTTOM META */}
          <div className={styles.heroMeta}>
            <span>EST. 2022</span>
            <span className={styles.metaDot}>·</span>
            <span>LOS ANGELES, CA</span>
            <span className={styles.metaDot}>·</span>
            <span>v2.0</span>
          </div>
        </section>

        {/* RIGHT — info column */}
        <div className={styles.infoColumn}>
          {/* EYEBROW */}
          <p className={styles.kicker}>
            creative developer &nbsp;✦&nbsp; designer &nbsp;✦&nbsp; artist
          </p>

          {/* NAME */}
          <h1 className={styles.title}>
            ashley<span className={styles.dot}>_</span>
          </h1>

          {/* BIO */}
          <p className={styles.description}>
            molecular and cell biology student. 29. code monkey and artist.
            email me at{" "}
            <a
              className={styles.brainEmail}
              href="mailto:ashley@xbrainstewx.com"
            >
              ashley@xbrainstewx.com
            </a>{" "}
            if you're interested in artwork, website design or consulation 🐇
          </p>

          {/* NAV GRID — 2×2 */}
          <nav className={styles.navGrid}>
            <div className={styles.smallCard}>
              <span className={styles.cardEyebrow}>[ 01 ]</span>
              <ArtModal
                label="artwork"
                title="artwork.exe"
                images={artworkImages}
              />
            </div>
            <div className={styles.smallCard}>
              <span className={styles.cardEyebrow}>[ 02 ]</span>
              <AboutModal />
            </div>
            <div className={styles.smallCard}>
              <span className={styles.cardEyebrow}>[ 03 ]</span>
              <span>websites</span>
            </div>
            <div className={styles.smallCard}>
              <span className={styles.cardEyebrow}>[ 04 ]</span>
              <ContactModal />
            </div>
          </nav>
        </div>
      </main>

      {/* COMMENTS */}
      <div className={styles.commentBox}>
        <CommentsBox />
      </div>
    </div>
  );
}