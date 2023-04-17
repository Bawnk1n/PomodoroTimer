import React from 'react';
import styles from '../styles/ControlButtons.module.css';
import  { useState } from 'react';
import Confetti from 'react-confetti';
import animationStyles from './ControlButtonsAnimations.module.css';


const ControlButtons = ({ onStart, onPause, onStop, onReset, isRunning }) => {
    const [showConfetti, setShowConfetti] = useState(false);
    const handleButtonClick = (callback) => {
        setShowConfetti('visible');
        setTimeout(() => {
          setShowConfetti('fadeOut');
        }, 3500);
        setTimeout(() => {
          setShowConfetti(false);
        }, 4500);
        callback();
      };
      
      
    return (
        <div className={styles.controlButtons}>
<button className={styles.button} onClick={() => handleButtonClick(onStart)} disabled={isRunning}>
  Start
</button>
<button className={styles.button} onClick={() => handleButtonClick(onPause)} disabled={!isRunning}>
  Pause
</button>
<button className={styles.button} onClick={() => handleButtonClick(onStop)}>
  Stop
</button>
<button className={styles.button} onClick={() => handleButtonClick(onReset)}>
  Reset
</button>
{showConfetti && (
  <Confetti
    className={
      showConfetti === 'fadeOut' ? animationStyles.fadeOut : ''
    }
  />
)}

        </div>
      );

  
};

export default ControlButtons;
