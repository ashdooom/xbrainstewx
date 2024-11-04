"use client";

import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import bubbles from '/public/bubbles.gif';
import mewwoo from '/public/mewwoo.gif';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.brainContainer}>
        <Link href='/'>
          <Image src={xbrainstewx} className={styles.brain} />
        </Link>
      </div>
      <div className={styles.blogContainer}>
        <p className={styles.blog}>
          ✰ check out my personal blog @ <a className={styles.blogLink} href="https://xbrainspacex.com">xbrainspacex.com</a> ✰
        </p>
      </div>
      <div className={styles.linksContainer}>
        <Link href="/programming" className={styles.links}>programming portfolio</Link>
        <Link href="/art" className={styles.links}>art portfolio</Link>
        <Link href="/commissions" className={styles.links} onClick={() => alert('commission form is currently unavailable. check back soon or email me at ashley@xbrainstewx.com✨')}>commissions</Link>
        <Link href="/about" className={styles.links}>about</Link>
        <Link href="/comments" className={styles.links}>comments</Link>
      </div>
      <div className={styles.bubbles}>
        <Image src={bubbles} alt="Bubbles" />
      </div>
      <div className={styles.gif}>
        <Image src={mewwoo} alt="Mewwoo GIF" />
      </div>
    </div>
  );
}
