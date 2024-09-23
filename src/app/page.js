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
        <Link href="/programming" className={styles.link}>programming portfolio</Link>
        <Link href="/art" className={styles.link}>art portfolio</Link>  {/* Example placeholder route */}
        <Link href="/commissions" className={styles.link}>commissions</Link>  {/* Example placeholder route */}
        <Link href="/about" className={styles.link}>about</Link>  {/* Example placeholder route */}
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
