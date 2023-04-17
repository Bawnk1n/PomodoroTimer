import React, { useState } from 'react';
import styles from '../styles/SessionSettings.module.css';

const SessionSettings = ({ onWorkDurationChange, onBreakDurationChange, isRunning }) => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  const handleWorkDurationChange = (e) => {
    const newWorkDuration = parseInt(e.target.value);
    setWorkDuration(newWorkDuration);
    onWorkDurationChange(newWorkDuration);
  };

  const handleBreakDurationChange = (e) => {
    const newBreakDuration = parseInt(e.target.value);
    setBreakDuration(newBreakDuration);
    onBreakDurationChange(newBreakDuration);
  };

  return (
    <div className={styles.sessionSettings}>
      <div className={styles.setting}>
        <label htmlFor="work-duration">Work duration (minutes):</label>
        <input
          className={styles.input}
          id="work-duration"
          type="number"
          value={workDuration}
          onChange={handleWorkDurationChange}
          disabled={isRunning}
        />
      </div>
      <div className={styles.setting}>
        <label htmlFor="break-duration">Break duration (minutes):</label>
        <input
          className={styles.input}
          id="break-duration"
          type="number"
          value={breakDuration}
          onChange={handleBreakDurationChange}
          disabled={isRunning}
        />
      </div>
    </div>
  );
  
};

export default SessionSettings;
