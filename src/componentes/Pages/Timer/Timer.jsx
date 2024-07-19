import React, { useState, useEffect, useRef } from 'react';
import './Timer.css'
export const Timer = () => {
  //definicion estados y referebcia
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    //useefeffct inicio y detebcion temporizador.
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
    <div className='E'>
      <p className='T'>Temporizador: {seconds}s</p>
      <button className ='U'onClick={handleStart} disabled={isRunning}>
        Iniciar
      </button>
      <button  className ='U'onClick={handleStop} disabled={!isRunning}>
        Pausar
      </button>
      <button  className ='U'  onClick={handleRestart}>Restablecer</button>
    </div>
  );
};
