import React from 'react';
import styles from '../styles/ControlButtons.module.css';

const ControlButtons = ({ onStart, onPause, onStop, onReset, isRunning }) => {
    return (
        <div className={styles.controlButtons}>
            <button className={styles.button} onClick={onStart} disabled={isRunning}>Start</button>
            <button className={styles.button} onClick={onPause} disabled={!isRunning}>Pause</button>
            <button className={styles.button} onClick={onStop}>Stop/Set</button>
            <button className={styles.button} onClick={onReset}>Reset</button>
        </div>
      );

  
};

export default ControlButtons;
