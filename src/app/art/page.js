"use client";

import Image from "next/image";
import styles from "../page.module.css";
import CommissionForm from "../Components/Commissions";
import ArtCarousel from "../Components/Carousel";

export default function Art() {

  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <ArtCarousel />
        </div>
    </div>
  );
}
