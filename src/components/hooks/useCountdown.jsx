import { useEffect, useState, useRef } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = useRef('')

  countDownDate.current = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate.current - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate.current - new Date().getTime());
    }, 1000);
    console.table(countDown / (1000 * 3600 * 24))
    console.table(countDown % (1000 * 3600 * 24) / (1000 * 3600))

    return () => clearInterval(interval);
  }, [countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };