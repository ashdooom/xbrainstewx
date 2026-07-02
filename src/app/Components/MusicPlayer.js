"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../musicplayer.module.css";

const tracks = [
  { title: "BRAIN STEW", src: "/songs/brainStew.mp3" },
  { title: "DISCO HEAVEN", src: "/songs/discoHeaven.mp3" },
  { title: "FALL FROM A STAR", src: "/songs/fall.mp3" },
  { title: "GINSENG STRIP", src: "/songs/ginsengStrip.mp3" },
  { title: "SPEAKERPHONE", src: "/songs/kylie.mp3" },
  { title: "I DONT WANNA BE ME", src: "/songs/typeO.mp3" },
];

export default function MusicPlayer() {
  const [tracklistOpen, setTracklistOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // swap track when current changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    if (playing) audio.play();
  }, [current]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const prev = () => setCurrent((i) => (i - 1 + tracks.length) % tracks.length);
  const next = () => setCurrent((i) => (i + 1) % tracks.length);

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    setProgress(audio.currentTime);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const onEnded = () => next();

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const time = ratio * duration;
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = String(Math.floor(s % 60)).padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={tracks[current].src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* now playing */}
      <div className={styles.nowPlaying}>
        <span className={styles.eyebrow}>NOW PLAYING</span>
        <span className={styles.trackTitle}>{tracks[current].title}</span>
      </div>

      {/* controls */}
      <div className={styles.controls}>
        <button onClick={prev} className={styles.btn}>
          <img src="/prev.png" alt="prev" />
        </button>
        <button
          onClick={togglePlay}
          className={`${styles.btn} ${styles.playBtn}`}
        >
          <img src={playing ? "/pause.png" : "/play.png"} alt="play" />
        </button>
        <button onClick={next} className={styles.btn}>
          <img src="/next.png" alt="next" />
        </button>
      </div>

      {/* progress */}
      <div className={styles.progressWrap}>
        <div className={styles.progressBar} onClick={seek}>
          <div
            className={styles.progressFill}
            style={{
              width: duration ? `${(progress / duration) * 100}%` : "0%",
            }}
          />
        </div>
        <div className={styles.times}>
          <span>{fmt(progress)}</span>
          <span>/</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      <button
        className={styles.tracklistToggle}
        onClick={() => setTracklistOpen((open) => !open)}
      >
        Tracks
      </button>

      {tracklistOpen && (
        <ul className={styles.tracklist}>
          {tracks.map((t, i) => (
            <li
              key={i}
              className={`${styles.track} ${i === current ? styles.active : ""}`}
              onClick={() => {
                setCurrent(i);
                setPlaying(true);
              }}
            >
              <span className={styles.trackNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
