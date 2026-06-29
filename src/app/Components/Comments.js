"use client";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import styles from "../comments.module.css";

export default function CommentsBox() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const commentsRef = collection(db, "comments");
    const unsub = onSnapshot(
      commentsRef,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data.sort((a, b) => {
          const aTime = a.timestamp?.toMillis?.() || 0;
          const bTime = b.timestamp?.toMillis?.() || 0;
          return bTime - aTime;
        });
        setComments(data);
      },
      (error) => {
        console.error("Comments snapshot error:", error);
      }
    );
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setSending(true);
    try {
      await addDoc(collection(db, "comments"), {
        name: name.trim(),
        text: comment.trim(),
        timestamp: serverTimestamp(),
      });
      setName("");
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("comment failed to send");
    } finally {
      setSending(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) return "just now";
    return timestamp.toDate().toLocaleString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <section className={styles.commentsSection}>

      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.kicker}>✦ guestbook.exe</span>
        <h2 className={styles.title}>
          leave a message<span className={styles.cursor}>_</span>
        </h2>
      </div>

      {/* FORM */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldWrap}>
          <label className={styles.fieldLabel}>[ name ]</label>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            className={styles.input}
          />
        </div>
        <div className={styles.fieldWrap}>
          <label className={styles.fieldLabel}>[ message ]</label>
          <textarea
            placeholder="write something..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={300}
            className={styles.textarea}
          />
        </div>
        <button type="submit" disabled={sending} className={styles.submitBtn}>
          {sending ? "posting..." : "post ✦"}
        </button>
      </form>

      {/* COMMENT LIST */}
      <div className={styles.commentList}>
        {comments.length === 0 ? (
          <p className={styles.empty}>
            <span className={styles.emptyDot}>●</span> no messages yet — be the first ✧
          </p>
        ) : (
          comments.map((item) => (
            <article className={styles.commentCard} key={item.id}>
              <div className={styles.commentTop}>
                <strong className={styles.commentName}>{item.name || "anonymous"}</strong>
                <span className={styles.commentDate}>{formatDate(item.timestamp)}</span>
              </div>
              <p className={styles.commentText}>{item.text || item.comment || item.comments || ""}</p>
            </article>
          ))
        )}
      </div>

    </section>
  );
}
