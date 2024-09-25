import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import xbrainstewx from '/public/images/xbrainstewx.png';
import bubbles from '/public/images/bubbles.gif';
import mewwoo from '/public/images/mewwoo.gif';

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href='/'>
        <Image src={xbrainstewx} className={styles.brain} />
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/programming" className={styles.linksContainer}>programming portfolio</Link>
        <Link href="/art" className={styles.linksContainer}>art portfolio</Link>  
        <Link href="/commissions" className={styles.linksContainer}>commissions</Link>  
        <Link href="/about" className={styles.linksContainer}>about</Link>  
        <Link href="/comments" className={styles.linksContainer}>comments</Link>
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
