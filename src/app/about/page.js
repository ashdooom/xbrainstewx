import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import xbrainstewx from '/public/images/xbrainstewx.png';
import mewwoflower from '/public/images/mewwoflower.gif';
import selfie from '/public/images/selfie.PNG';

export default function Programming() {
    return (
        <div className={styles.page}>
            <Link href='/'>
                <Image src={xbrainstewx} className={styles.brain} />
            </Link>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.linkAbout}>programming portfolio</Link>
                <Link href="/art" className={styles.linkAbout}>art portfolio</Link>
                <Link href="/commissions" className={styles.linkAbout}>commissions</Link>
                <Link href="/about" className={styles.linkAbout}>about</Link>
            </div>
            <div>
                <Image src={selfie} className={styles.selfie} />
            </div>
            <div>
                
                <p className={styles.about}>
                    hi there, my name is Ashley Corona and I am an aspiring Software Engineer. I currently am enrolled at Gateway Community College where I hope to graduate within 3 years. I have loved coding since I was a child, where my journey began on Myspace. I am from Los Angeles, CA born and raised. I am currently living in CT with my husband, Ryan, and our little chihuahua named Bruiser. My free time is spent reading, playing video games, drawing, sleeping and of course programming! <i>Please feel free to reach out to me via Github under the programming portfolio link.</i> Or, via email at <strong>ashleeglasss@gmail.com.</strong> Thanks for reading!
                </p>
            </div>
            <div>
                <Image src={mewwoflower} />
            </div>
        </div>
    );
}
