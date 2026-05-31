"use client";

import { useEffect, useMemo, useState } from "react";

interface TypingTextProps {
  words: readonly string[];
}

export function TypingText({ words }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentWord = words[wordIndex] ?? "";
  const visibleText = useMemo(
    () => currentWord.slice(0, letterIndex),
    [currentWord, letterIndex],
  );

  useEffect(() => {
    const isComplete = letterIndex === currentWord.length;
    const isEmpty = letterIndex === 0;
    const delay = deleting ? 34 : isComplete ? 1150 : 58;

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isEmpty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [currentWord.length, deleting, letterIndex, words.length]);

  return (
    <span className="inline-flex min-h-7 items-center text-primary">
      {visibleText}
      <span className="ml-1 h-6 w-px animate-pulse bg-primary" />
    </span>
  );
}
