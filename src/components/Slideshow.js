"use client"; // Ensure the component is client-side
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

// Updated array with a 'type' property to differentiate between images and videos
const media = [
  { src: "/images/art1.jpg", alt: "art1", type: "image" }, // Image paths from the public folder
  { src: "/images/art2.jpg", alt: "art2", type: "image" },
  { src: "/images/art3.png", alt: "art3", type: "image" },
  { src: "/images/closeup.jpg", alt: "Closeup", type: "image" },
  { src: "/images/art4.png", alt: "Art4", type: "image" },
  { src: "/images/closeup2.jpg", alt: "Closeup 2", type: "image" },
  { src: "/images/art5.png", alt: "Art5", type: "image" },
  { src: "/images/art6.png", alt: "Art6", type: "image" },
  { src: "/images/vid.mp4", alt: "Clouds Video", type: "video" }, // Added a video
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === media.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {media.map((item, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        >
          {item.type === "image" ? (
            // Render Image component for images
            <Image
              src={item.src}
              alt={item.alt}
              width={600} // Set a fixed width
              height={700} // Set a fixed height
            />
          ) : (
            // Render Video tag for videos
            <video
              src={item.src}
              alt={item.alt}
              width={600} // Set fixed width
              height={700} // Set fixed height
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
