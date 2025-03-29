import xbrainstewx from "/public/xbrainstewx.png";
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={`${styles.marqueeContainer} bg-black py-2 border-t border-pink-500`}>
                <span className={styles.marqueeText}>
                    ☆ welcome to my page  ☆ leave a comment ☆ commissions open  ☆
                </span>
            </div>
            <div className={styles.header}>
                <div className={styles.brainContainer}>
                    <Link href={"/"}>
                        <Image src={xbrainstewx} alt="xbrainstewx" className={styles.brain} />
                    </Link>
                </div>
                <div className={styles.space}>
                    check out my blog at <Link className={styles.xbrainspacex} href="https://xbrainspacex.com">xbrainspacex</Link> ☆
                </div>
                <div className={styles.links}>
                    <Link href={"/programming"}>programming</Link>
                    <Link href={"/art"}>art</Link>
                    <Link href={"/commissions"}>commissions</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;