"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import xbrainstewx from '/public/images/xbrainstewx.png';
import kitty from '/public/images/kitty.gif';

export default function Programming() {
    return (
        <div className={styles.page}>
            <Link href='/'>
                <Image src={xbrainstewx} className={styles.brain} />
            </Link>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.linkArt}>programming portfolio</Link>
                <Link href="/art" className={styles.linkArt}>art portfolio</Link>
                <Link href="/commissions" className={styles.linkArt}>commissions</Link>
                <Link href="/about" className={styles.linkArt}>about</Link>
            </div>
            <div className={styles.artText}>
                <p>
                    request a commission <Link href='/commissions'><p className={styles.here}>here</p></Link>
                </p>
            </div>
            <Slideshow />
            <div>
                <Image src={kitty} />
            </div>
        </div>

    );
}
