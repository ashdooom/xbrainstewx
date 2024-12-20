"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

const media = [

  { src: "/images/art12.png", alt: "Art12", type: "image" },
  { src: "/images/art8.png", alt: "Art8", type: "image" },
  { src: "/images/art9.png", alt: "Art9", type: "image" },
  { src: "/images/art10.png", alt: "Art10", type: "image" },
  { src: "/images/art11.png", alt: "Art11", type: "image" },
  { src: "/images/art7.PNG", alt: "Art7", type: "image" },
  { src: "/images/closeup3.jpg", alt: "Closeup 3", type: "image" },
  { src: "/images/art1.jpg", alt: "art1", type: "image" },
  { src: "/images/art2.jpg", alt: "art2", type: "image" },
  { src: "/images/art3.png", alt: "art3", type: "image" },
  { src: "/images/closeup.jpg", alt: "Closeup", type: "image" },
  { src: "/images/art4.png", alt: "Art4", type: "image" },
  { src: "/images/closeup2.jpg", alt: "Closeup 2", type: "image" },
  { src: "/images/art5.png", alt: "Art5", type: "image" },
  { src: "/images/art6.png", alt: "Art6", type: "image" },
  { src: "/images/vid.mp4", alt: "Clouds Video", type: "video" },
];

const Slideshow = () => {

  return (
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
  );
};

export default Slideshow;
