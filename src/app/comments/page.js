"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { db } from "../util/firebase";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import Link from "next/link";
import xbrainstewx from '/public/images/xbrainstewx.png';
import mewwobow from '/public/images/mewwobow.gif';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState(""); 

    useEffect(() => {
        const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setComments(commentsArray);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newComment.trim() === "") {
            alert("Comment cannot be empty");
            return;
        }

        console.log("Submitting comment:", newComment, "by:", name);

        try {
            await addDoc(collection(db, "comments"), {
                text: newComment,
                timestamp: serverTimestamp(),
                name: name, 
            });

            setNewComment("");
            setName(""); 
        } catch (error) {
            console.error("Error adding comment: ", error.message); 
            alert("There was an error submitting your comment. Please try again.");
        }
    };

    return (
        <div className={styles.page}>
            <Link href='/'>
                <Image src={xbrainstewx} className={styles.brain} alt="xbrainstewx logo" />
            </Link>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.linkComments}>programming portfolio</Link>
                <Link href="/art" className={styles.linkComments}>art portfolio</Link>
                <Link href="/commissions" className={styles.linkComments}>commissions</Link>
                <Link href="/about" className={styles.linkComments}>about</Link>
                <Link href="/comments" className={styles.linkComments}>comments</Link>
            </div>
            <div>
                <p>Leave a comment below</p>
            </div>
            <div>
                <Image src={mewwobow} className={styles.mewwoBow} alt="mewwo bow gif" />
            </div>
            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <input
                    placeholder="name"
                    className={styles.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <textarea
                    placeholder="add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.commentButton}>add comment</button>
            </form>

            <div className={styles.commentsSection}>
                {comments.map(comment => (
                    <div key={comment.id} className={styles.comment}>
                        <p className={styles.commentText}>{comment.text}</p>
                        <p className={styles.commentTimestamp}>
                            {comment.timestamp?.toDate().toLocaleString() || "Just now"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}