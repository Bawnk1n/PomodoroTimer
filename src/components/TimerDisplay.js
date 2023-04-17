import React, { useState, useEffect } from 'react';
import styles from '../styles/TimerDisplay.module.css';

const TimerDisplay = ({ minutes, seconds, mode }) => {
  // Format timer as MM:SS
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className={styles.timerDisplay}>
      <h1 className={styles.mode}>{mode}</h1>
      <p className={styles.time}>{formattedTime}</p>
    </div>
  );
};

export default TimerDisplay;
