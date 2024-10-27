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
      <Link href='/'>
        <Image src={xbrainstewx} className={styles.brain} />
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/programming" className={styles.links}>programming portfolio</Link>
        <Link href="/art" className={styles.links}>art portfolio</Link>  
        <Link href="/commissions" className={styles.links}>commissions</Link>  
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
