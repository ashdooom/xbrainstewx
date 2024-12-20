"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import { db } from "../util/firebase";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import Link from "next/link";
import xbrainstewx from '/public/xbrainstewx.png';
import mewwobow from '/public/mewwobow.gif';
import girrr from '/public/girrr.gif';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState("");


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const commentsArray = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setComments(commentsArray);
                });
                return () => unsubscribe();
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newComment.trim() === "" || name.trim() === "") {
            alert("Comment and name cannot be empty");
            return;
        }

        try {
            await addDoc(collection(db, "comments"), {
                text: newComment,
                name: name,
                timestamp: serverTimestamp(),
            });
            setNewComment("");
            setName("");
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };


    return (
        <div className={styles.page}>
            <div className={styles.brainContainer}>
                <Link href='/'>
                    <Image src={xbrainstewx} className={styles.brain} />
                </Link>
            </div>
            <div className={styles.blogContainer}>
                <p className={styles.blog}>
                ✰ check out my personal blog @ <a className={styles.blogLink} href="https://xbrainspacex.com">xbrainspacex.com</a> ✰
                </p>
            </div>
            <div className={styles.linksContainer}>
                <Link href="/programming" className={styles.links}>programming portfolio</Link>
                <Link href="/art" className={styles.links}>art portfolio</Link>
                <Link href="/commissions" className={styles.links} onClick={() => alert('commission form is currently unavailable. check back soon or email me at ashley@xbrainstewx.com✨')}>commissions</Link>
                <Link href="/about" className={styles.links}>about</Link>
                <Link href="/comments" className={styles.links}>comments</Link>
            </div>
            <div className={styles.commentForm}>
                <p>leave a comment below</p>
            </div>
            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <Image className={styles.girrr} src={girrr} />
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
            <div className={styles.scrollComments}>
                <div className={styles.commentsSection}>
                    {comments.map(comment => (
                        <div key={comment.id} className={styles.comment}>
                            <h1>𐙚⊹₊⋆☆</h1>
                            <p className={styles.commentText}><strong>{comment.name}:</strong></p>
                            <p className={styles.commentText}>{comment.text}</p>
                            <p className={styles.commentTimestamp}>
                                {comment.timestamp?.toDate ? comment.timestamp.toDate().toLocaleString() : "Just now"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
