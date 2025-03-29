"use client";

import Image from "next/image";
import styles from "./page.module.css";
import xbrainstewx from "/public/xbrainstewx.png";
import selfie from "/public/selfie.jpeg";
import clouds from "/public/clouds.gif";
import bearAngel from "/public/bearAngel.gif";
import Link from "next/link";
import Guestbook from "./Components/Guestbook";
import MusicPlayer from "./Components/MusicPlayer";

export default function Home() {

  return (
    <div className={styles.page}>
      
      <div className={styles.mainContent}>
        <div className={styles.selfie}>
          <Image src={clouds} className={styles.border} alt="border" />
          <Image src={selfie} className={styles.selfieImg} alt="selfie" />
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.bioBlock}>
            <div className={styles.bio}>
            <div className={styles.asl}>28/f/CT</div>
              <p className={styles.line}>likes: coding, drawing, sleeping, mexican food, green day, the sims, geek bars</p>
              <p className={styles.line}>dislikes: mornings, centipedes, broken nails, loud noises</p>
            </div>
            <div className={styles.bearContainer}>
              <Image src={bearAngel} className={styles.bear} alt="bearAngel" />
            </div>
          </div>
        </div>
        <div className={styles.guestBookContainer}>
          <Guestbook />
        </div>
      </div>
    </div>
  );
}
