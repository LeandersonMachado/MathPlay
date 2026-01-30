import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimer(start = 0) {
  const [seconds, setSeconds] = useState(start);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const reset = useCallback(() => {
    setSeconds(start);
  }, [start]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return {
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(secs).padStart(2, '0'),
    reset
  };
}
export default useTimer;