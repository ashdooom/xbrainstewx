"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import mewwoflower from '/public/mewwoflower.gif';
import selfie from '/public/selfie.png';

export default function Programming() {
    return (
        <div className={styles.page}>
            <div className={styles.brainContainer}>
                <Link href='/'>
                    <Image src={xbrainstewx} className={styles.brain} />
                </Link>
            </div>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.links}>programming portfolio</Link>
                <Link href="/art" className={styles.links}>art portfolio</Link>
                <Link href="/commissions" className={styles.links} onClick={() => alert('commission form is currently unavailable. check back soon or email me at ashley@xbrainstewx.com✨')}>commissions</Link>
                <Link href="/about" className={styles.links}>about</Link>
                <Link href="/comments" className={styles.links}>comments</Link>
            </div>
            <div>
                <Image src={selfie} className={styles.selfie} />
            </div>
            <div className={styles.about}>
                <p className={styles.about}>
                    hi there, my name is Ashley Corona and I am an aspiring Software Engineer. I currently am enrolled at Gateway Community College where I hope to graduate within 3 years. I have loved coding since I was a child, where my journey began on Myspace. I am from Los Angeles, CA born and raised. I am currently living in CT with my husband, Ryan, and our little chihuahua named Bruiser. My free time is spent reading, playing video games, drawing, sleeping and of course programming! <i>Please feel free to reach out to me via Github under the <Link className={styles.progAbout} href='/programming'>programming portfolio</Link></i> link. Or, via email at <strong className={styles.email}><a href="mailto:ashley@xbrainstewx.com?subject=Inquiry&body=Hi Ashley,%0D%0A">ashley@xbrainstewx.com.</a>
                    </strong> click the email link to compose a message to send directly to me. Thanks for reading!
                </p>
            </div>
            <div>
                <Image src={mewwoflower} />
            </div>
        </div>
    );
}
