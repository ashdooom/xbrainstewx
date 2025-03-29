"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

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
  const [fileUrl, setFileUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setError("");
  };

  const handleFileUpload = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("File is too big (max 5MB)");
      return null;
    }

    try {
      setUploading(true);
      const fileRef = ref(storage, `commissions/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setFileUrl(url);
      return url;
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload file");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    let uploadedUrl = fileUrl;
    if (form.file && !fileUrl) {
      uploadedUrl = await handleFileUpload(form.file);
      if (!uploadedUrl) {
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const response = await fetch("/api/commission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, file: uploadedUrl }),
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
        setFileUrl(null);
      } else {
        alert("Something went wrong :(");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Could not submit form");
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

      <input
        type="file"
        name="file"
        accept="image/*,application/pdf,application/zip,.psd,audio/*"
        className={styles.input}
        onChange={handleChange}
      />

      {uploading && <p className={styles.uploading}>uploading file...</p>}
      {fileUrl && (
        <p className={styles.preview}>
          preview:{" "}
          {form.file?.type.startsWith("image/") ? (
            <img src={fileUrl} alt="preview" style={{ maxWidth: "100%", marginTop: "0.5rem" }} />
          ) : (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">view uploaded file</a>
          )}
        </p>
      )}

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.button} disabled={isSubmitting || uploading}>
        {isSubmitting ? "sending..." : "submit ☆彡"}
      </button>
    </form>
  );
}
