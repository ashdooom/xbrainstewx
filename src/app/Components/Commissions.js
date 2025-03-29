"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function CommissionForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    request: "",
    type: "",
    social: "",
    date: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    try {
      const formData = {
        ...form,
        file: undefined,
      };

      const response = await fetch("/api/commission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✨ Commission request submitted!");
        setForm({
          name: "",
          email: "",
          request: "",
          type: "",
          social: "",
          date: "",
          file: null,
        });
      } else {
        alert("Something went wrong :(");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your request.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <form className={styles.commissionForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>♡ commission me ♡</h2>

      <input type="text" name="name" placeholder="ur name" className={styles.input} value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="ur email" className={styles.input} value={form.email} onChange={handleChange} required />
      
      <select name="type" className={styles.input} value={form.type} onChange={handleChange} required>
        <option value="">select commission type</option>
        <option value="art">🎨 art</option>
        <option value="code">💻 code</option>
        <option value="design">🎀 design</option>
        <option value="collab">🖤 collab</option>
      </select>

      <textarea name="request" placeholder="leave a message!" className={styles.textarea} value={form.request} onChange={handleChange} required />
      <input type="text" name="social" placeholder="socials (insta, tumblr, etc)" className={styles.input} value={form.social} onChange={handleChange} />
      <input type="date" name="date" className={styles.input} value={form.date} onChange={handleChange} />
      <input type="file" name="file" accept="image/*" className={styles.input} onChange={handleChange} />

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "sending..." : "submit ☆彡"}
      </button>
    </form>
  );
}
