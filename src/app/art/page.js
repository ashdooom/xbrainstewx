"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import xbrainstewx from '/public/images/xbrainstewx.png';
import kitty from '/public/images/kitty.gif';
import aboutart from '/public/images/aboutart.PNG';

export default function Art() {
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
            <div className={styles.artText}>
                <p>
                    request a commission <Link href='/commissions'><p className={styles.here}>here</p></Link>
                </p>
            </div>
            <div>
                <Image className={styles.aboutArt} src={aboutart} />
            </div>
            <Slideshow />
            <div>
                <Image src={kitty} />
            </div>
        </div>

    );
}
