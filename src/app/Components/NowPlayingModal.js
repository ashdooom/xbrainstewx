"use client";

import { useRef, useState } from "react";
import styles from "../modals.module.css";

const tracks = [
  {
    title: "song one",
    artist: "xbrainstewx",
    src: "/music/song1.mp3",
  },
  {
    title: "song two",
    artist: "xbrainstewx",
    src: "/music/song2.mp3",
  },
];

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);

  const track = tracks[currentTrack];

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    setCurrentTrack(next);
    setPlaying(false);

    setTimeout(() => {
      audioRef.current?.play();
      setPlaying(true);
    }, 100);
  };

  const prevTrack = () => {
    const prev = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
    setCurrentTrack(prev);
    setPlaying(false);

    setTimeout(() => {
      audioRef.current?.play();
      setPlaying(true);
    }, 100);
  };

  return (
    <section className={styles.player}>
      <audio ref={audioRef} src={track.src} onEnded={nextTrack} />

      <p className={styles.kicker}>local mp3 player</p>

      <div className={styles.screen}>
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={prevTrack}>
          ◀
        </button>

        <button type="button" onClick={togglePlay} className={styles.play}>
          {playing ? "pause" : "play"}
        </button>

        <button type="button" onClick={nextTrack}>
          ▶
        </button>
      </div>

      <div className={styles.trackList}>
        {tracks.map((item, index) => (
          <button
            type="button"
            key={item.src}
            onClick={() => {
              setCurrentTrack(index);
              setPlaying(false);
              setTimeout(() => {
                audioRef.current?.play();
                setPlaying(true);
              }, 100);
            }}
            className={index === currentTrack ? styles.activeTrack : ""}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
}