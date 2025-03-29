"use client";

import Image from "next/image";
import styles from "../page.module.css";
import CommissionForm from "../Components/Commissions";

export default function Commissions() {

  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <CommissionForm />
        </div>
    </div>
  );
}
