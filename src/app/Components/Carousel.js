"use client";
import { useState } from "react";
import styles from "../page.module.css";

const artImages = [
    "/art/aboutart.PNG",
    "/art/art1.jpg",
    "/art/art2.jpg",
    "/art/closeup2.jpg",
    "/art/art3.png",
    "art/closeup3.jpg",
    "/art/art4.png",
    "/art/art5.png",
    "/art/art6.png",
    "/art/art7.PNG",
    "/art/art8.PNG",
    "/art/art9.PNG",
    "/art/art10.PNG",
    "/art/art11.PNG",
    "/art/art12.PNG",
];

export default function ArtCarousel() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? artImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === artImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>🖤 art gallery 🖤</h2>

            <div className={styles.imageWrapper}>
                <img src={artImages[current]} alt={`art ${current + 1}`} className={styles.image} />
            </div>

            <div className={styles.controls}>
                <button className={styles.slideBtn} onClick={prevSlide}>
                    <img src="/mew.gif" alt="arrow" className={styles.mewLeft} />
                </button>
                <span>{current + 1} / {artImages.length}</span>
                <button className={styles.slideBtn} onClick={nextSlide}>
                <img src="/mew.gif" alt="arrow" className={styles.mewRight} />
                </button>
            </div>
        </div>
    );
}
