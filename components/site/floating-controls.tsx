"use client";

import { motion } from "framer-motion";
import { Palette, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type WebAudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

export function FloatingControls() {
  const [musicOn, setMusicOn] = useState(false);
  const [altTheme, setAltTheme] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    document.documentElement.dataset.theme = altTheme ? "aurora" : "neon";
  }, [altTheme]);

  async function toggleMusic() {
    if (musicOn) {
      const context = audioRef.current;
      if (!context) {
        setMusicOn(false);
        return;
      }

      gainRef.current?.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.45);
      window.setTimeout(() => {
        oscillatorsRef.current.forEach((oscillator) => oscillator.stop());
        oscillatorsRef.current = [];
        audioRef.current?.close();
        audioRef.current = null;
        gainRef.current = null;
      }, 520);
      setMusicOn(false);
      return;
    }

    const AudioCtor = window.AudioContext || (window as WebAudioWindow).webkitAudioContext;
    if (!AudioCtor) {
      setMusicOn(false);
      return;
    }

    const context = new AudioCtor();
    const gain = context.createGain();
    gain.gain.value = 0.0001;
    gain.connect(context.destination);

    const frequencies = [130.81, 196, 261.63];
    const oscillators = frequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const filter = context.createBiquadFilter();
      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      filter.type = "lowpass";
      filter.frequency.value = 600 + index * 180;
      oscillator.connect(filter);
      filter.connect(gain);
      oscillator.start();
      return oscillator;
    });

    gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.8);
    audioRef.current = context;
    gainRef.current = gain;
    oscillatorsRef.current = oscillators;
    setMusicOn(true);
  }

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((oscillator) => oscillator.stop());
      audioRef.current?.close();
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 left-5 z-50 flex gap-2"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <Button
        aria-label={musicOn ? "Turn ambient audio off" : "Turn ambient audio on"}
        size="icon"
        variant="secondary"
        onClick={toggleMusic}
        className="border-white/[0.12] bg-cyber-panel/70"
      >
        {musicOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      </Button>
      <Button
        aria-label="Shift visual theme"
        size="icon"
        variant="secondary"
        onClick={() => setAltTheme((current) => !current)}
        className="border-white/[0.12] bg-cyber-panel/70"
      >
        <Palette className="size-4" />
      </Button>
    </motion.div>
  );
}
