import React, { useState, useEffect } from 'react';
import styles from "./ActiveTimedTask.module.css";

function Timer({ name, duration, onDelete }) {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemaining(prevRemaining => prevRemaining > 0 ? prevRemaining - 1 : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.ceil(remaining / 60);
  const seconds = remaining % 60;

  const timeRemaining = minutes > 1 ? `${minutes}m` : `${seconds}s`;

  const fillPercentage = (duration - remaining) / duration * 100;
  const backgroundAngle = fillPercentage * 3.6; // Convert fillPercentage to angle

  const backgroundColor = `conic-gradient(from 0deg, red ${backgroundAngle}deg, transparent ${backgroundAngle}deg)`;

  return (
    <div className={styles.timer} style={{ backgroundImage: backgroundColor }} onClick={onDelete}>
      <div className={styles.timerContent}>
        <div className={styles.timeRemaining}>{timeRemaining}</div>
        <div className={styles.timerName}>{name}</div>
      </div>
    </div>
  );
}

export default Timer;