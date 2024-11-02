"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import gloomy2 from '/public/gloomy2.gif';
import bat from '/public/bat.gif';
import { useRouter } from "next/navigation";

export default function Commissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/commissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Thanks for your information and trust. I will get back to you as soon as possible.');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          projectDetails: '',
        });
        setIsModalOpen(true);
      } else {
        setStatusMessage('Submission failed: ' + response.statusText);
        setIsModalOpen(true);
      }
    } catch (error) {
      setStatusMessage('Error submitting form: ' + error.message);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function openNewWindow() {
    window.open("https://instagram.com/xbrainstewx.art", "_blank");
  }

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
      <div>
        <Image src={gloomy2} className={styles.gloomy2} />
      </div>
      <div className={styles.commForm}>
        <p className={styles.commForm}>
          fill out this form for a website or art commission
        </p>
        <Image src={bat} />
        <p>
          or, follow me on instagram <a onClick={openNewWindow} className={styles.here}>here</a>
        </p>
      </div>
      <div className={styles.commBg}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Phone:</label>
            <br />
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div>
            <label>Project Details:</label>
            <br />
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>{statusMessage}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
