import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import ControlButtons from './components/ControlButtons';
import SessionSettings from './components/SessionSettings';
import './App.css';
import styles from './styles/App.module.css';


const App = () => {
  const [mode, setMode] = useState('Work');
  const [isRunning, setIsRunning] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timer, setTimer] = useState(workDuration * 60);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (timer <= 0) {
      setMode((prevMode) => (prevMode === 'Work' ? 'Break' : 'Work'));
      setTimer(mode === 'Work' ? breakDuration * 60 : workDuration * 60);
    }
  }, [timer, workDuration, breakDuration, mode]);
  
  const onStart = () => setIsRunning(true);
  const onPause = () => setIsRunning(false);
  const onStop = () => {
    setIsRunning(false);
    setMode('Work');
    setTimer(workDuration * 60);
  };
  const onReset = () => {
    setIsRunning(false);
    if (mode === 'Work') {
      setTimer(workDuration * 60);
    } else {
      setTimer(breakDuration * 60);
    }
  };
  

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
    <div className={styles.newThing}>
      <TimerDisplay minutes={minutes} seconds={seconds} mode={mode} />
      <ControlButtons
        onStart={onStart}
        onPause={onPause}
        onStop={onStop}
        onReset={onReset}
        isRunning={isRunning}
      />
      <SessionSettings
        onWorkDurationChange={setWorkDuration}
        onBreakDurationChange={setBreakDuration}
        isRunning={isRunning}
      />
    </div>
    </div>
  </div>
);
};

export default App;
