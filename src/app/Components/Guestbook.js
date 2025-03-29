'use client';

import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { storage } from '../../../firebase';
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const submitEntry = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    await addDoc(collection(db, 'guestbook'), {
      name,
      message,
      timestamp: serverTimestamp(),
    });

    setName('');
    setMessage('');
  };

  return (
    <div className="guestbook">
      <h2 className="guestbookTitle">💌 guestbook 💌</h2>

      <form onSubmit={submitEntry} className="guestbookForm">
        <input
          className="guestInput"
          type="text"
          placeholder="ur name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="guestTextarea"
          placeholder="leave a glittery message ✶"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="guestButton" type="submit">sign</button>
      </form>

      <div className="guestMessages">
        {entries.map((entry) => (
          <div key={entry.id} className="guestEntry">
            <p className="guestName">✶ {entry.name} ✶</p>
            <p className="guestMessage">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
