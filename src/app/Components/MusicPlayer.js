"use client";
import { useRef, useState, useEffect } from "react";
import styles from "../page.module.css";

const songs = [
  { title: "disco heaven by lady gaga", src: "/songs/discoHeaven.mp3" },
  { title: "brain stew by green day", src: "/songs/brainStew.mp3" },
  { title: "fall from a star by kill paradise", src: "/songs/fall.mp3" },
  { title: "i dont wanna be me by type o negative", src: "/songs/typeO.mp3" },
  { title: "cant get you outta my head by kylie minogue", src: "/songs/kylie.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const [analyser, setAnalyser] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    if (!analyser || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
    canvas.height = 80;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const stars = [];

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height / 2;
      const barWidth = (canvas.width / bufferLength) * 1.8;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const scaledHeight = barHeight / 7; 
      
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#ff99ff";
        ctx.fillStyle = "#ff66cc";
        ctx.fillRect(x, centerY - scaledHeight / 2, barWidth, scaledHeight);
      
        if (barHeight > 30 && Math.random() < 0.2) {
          stars.push({
            x: x + barWidth / 8,
            y: centerY - scaledHeight / 2,
            size: Math.random() * 2 + 1,
            alpha: 1.0,
          });
        }
      
        x += barWidth + 4;
      }
      
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        star.y -= 0.5;
        star.alpha -= 0.01;
        if (star.alpha <= 0) stars.splice(i, 1);
      }
    };

    draw();
  }, [analyser]);

  const sourceNodeRef = useRef(null); // Add this near your other useRefs

  const togglePlay = () => {
    if (!audioRef.current) return;
  
    if (!audioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const analyserNode = context.createAnalyser();
      analyserNode.fftSize = 32;
  
      const sourceNode = context.createMediaElementSource(audioRef.current);
      sourceNode.connect(analyserNode);
      analyserNode.connect(context.destination);
  
      sourceNodeRef.current = sourceNode;
      setAudioContext(context);
      setAnalyser(analyserNode);
    } else if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  
    setIsPlaying(!isPlaying);
  };
  

  const playNext = () => {
    const next = (current + 1) % songs.length;
    setCurrent(next);
    setIsPlaying(true);
  };

  const playPrev = () => {
    const prev = (current - 1 + songs.length) % songs.length;
    setCurrent(prev);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [current]);

  return (
    <div className={styles.stickyPlayer}>
      <div className={styles.nowPlaying}>
        ♪ now playing: {songs[current].title} ♪
      </div>

      <audio ref={audioRef} onEnded={playNext}>
        <source src={songs[current].src} type="audio/mpeg" />
        your browser doesn’t support audio playback ✶
      </audio>

      <div className={styles.controls}>
        <button className={styles.iconButton} onClick={playPrev}>
          <img className={styles.btnImg} src="/prev.png" alt="prev" />
        </button>
        <button className={styles.iconButton} onClick={togglePlay}>
          <img
            className={styles.btnImg}
            src={isPlaying ? "/pause.png" : "/play.png"}
            alt="toggle"
          />
        </button>
        <button className={styles.iconButton} onClick={playNext}>
          <img className={styles.btnImg} src="/next.png" alt="next" />
        </button>
      </div>

      <canvas ref={canvasRef} className={styles.visualizerCanvas} />
    </div>
  );
}
