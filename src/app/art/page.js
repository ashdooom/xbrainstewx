"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import kitty from '/public/kitty.gif';
import aboutart from '/public/aboutart.PNG';
import mew from '/public/mew.gif';

const media = [

    { src: "/art12.PNG", alt: "Art12", type: "image" },
    { src: "/art8.png", alt: "Art8", type: "image" },
    { src: "/art9.png", alt: "Art9", type: "image" },
    { src: "/art10.png", alt: "Art10", type: "image" },
    { src: "/art11.png", alt: "Art11", type: "image" },
    { src: "/art7.PNG", alt: "Art7", type: "image" },
    { src: "/closeup3.jpg", alt: "Closeup 3", type: "image" },
    { src: "/art1.jpg", alt: "art1", type: "image" },
    { src: "/art2.jpg", alt: "art2", type: "image" },
    { src: "/art3.png", alt: "art3", type: "image" },
    { src: "/closeup.jpg", alt: "Closeup", type: "image" },
    { src: "/art4.png", alt: "Art4", type: "image" },
    { src: "/closeup2.jpg", alt: "Closeup 2", type: "image" },
    { src: "/art5.png", alt: "Art5", type: "image" },
    { src: "/art6.png", alt: "Art6", type: "image" },
    { src: "/vid.mp4", alt: "Clouds Video", type: "video" },
];

export default function Art() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === media.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? media.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.page}>
            <Link href='/'>
                <Image src={xbrainstewx} className={styles.brain} />
            </Link>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.links}>programming portfolio</Link>
                <Link href="/art" className={styles.links}>art portfolio</Link>
                <Link href="/commissions" className={styles.links} onClick={() => alert('commission form is currently unavailable. check back soon or email me at ashley@xbrainstewx.com✨')}>commissions</Link>
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
            <div className={styles.slideshow}>
                {media.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
                    >
                        {item.type === "image" ? (
                            <Image src={item.src} alt={item.alt} width={600} height={700} />
                        ) : (
                            <video
                                src={item.src}
                                alt={item.alt}
                                width={600}
                                height={700}
                                autoPlay
                                muted
                                loop
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.mews}>
                <Image
                    src={mew}
                    className={styles.mewRight}
                    onClick={prevSlide}
                />
                <Image
                    src={mew}
                    className={styles.mewLeft}
                    onClick={nextSlide}
                />
            </div>
            <div>
                <h1 className={styles.mewText}>
                    the mews are prev and next buttons
                </h1>
            </div>
            <div>
                <Image className={styles.kitty} src={kitty} />
            </div>
        </div>

    );
}
