import { useState, useEffect } from 'react';

export function useCountup(
  target: number,
  duration: number = 2000,
  delay: number = 0
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCount(Math.floor(target * progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [target, duration, delay]);

  return count;
}
