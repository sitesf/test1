import { useState, useEffect } from 'react';

interface UseTypewriterReturn {
  displayed: string;
  done: boolean;
}

export function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
): UseTypewriterReturn {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      let currentIndex = 0;

      intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayed(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
