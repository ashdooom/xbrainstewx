"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";
import Link from "next/link";
import xbrainstewx from '/public/images/xbrainstewx.png';
import gloomy2 from '/public/images/gloomy2.gif';

export default function Programming() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('thanks for your information and trust. i will get back to you as soon as possible.');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          projectDetails: '',
        });
      } else {
        setStatusMessage('Submission failed: ' + response.statusText);
      }
    } catch (error) {
      setStatusMessage('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className={styles.page}>
      <Link href='/'>
        <Image src={xbrainstewx} className={styles.brain} />
      </Link>
      <div className={styles.linksContainer}>
        <Link href="/programming" className={styles.linkComm}>programming portfolio</Link>
        <Link href="/art" className={styles.linkComm}>art portfolio</Link>
        <Link href="/commissions" className={styles.linkComm}>commissions</Link>
        <Link href="/about" className={styles.linkComm}>about</Link>
        <Link href="/comments" className={styles.linkComm}>comments</Link>
      </div>
      <div>
        <Image src={gloomy2} className={styles.gloomy2} />
      </div>
      <div>
        <p className={styles.commForm}>
          Fill out this form for a website or art commission
        </p>
      </div>
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
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}
