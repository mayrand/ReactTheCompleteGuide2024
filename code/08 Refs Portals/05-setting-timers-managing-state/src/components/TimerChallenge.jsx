import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timer, setTimer] = useState(0);
  console.log("TimerChallenge");

  function handleStart() {
    let timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimer(timer);
    setTimerStarted(true);
    console.log("handleStart");
  }

  function handleStop() {
    clearTimeout(timer);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
