import React, { useState, useEffect, useRef } from 'react';

export const Timer = () => {
  //definicion estados y referebcia
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    _//useefeffct inicio y detebcion temporizador.
        if (isRunning) {
          //se efecutara el intervalo cada segundo
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000)//segundis transcurridos;
    } else {
      clearInterval(timerRef.current);
    }// se limpia intervalo

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setSeconds(0);
    clearInterval(timerRef.current);
    setIsRunning(true);
  };

  return (
    <div>
      <p>Temporizador: {seconds}s</p>
      <button onClick={handleStart} disabled={isRunning}>
        Iniciar
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Pausar
      </button>
      <button onClick={handleRestart}>Restablecer</button>
    </div>
  );
};
