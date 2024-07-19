import React, { useState, useEffect } from 'react';

export const Clock = () => {
  //se define el estado
  const [time, setTime] = useState('');

  //se creaa el useeffect con el intervalo
  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  //se añade 0 si el valor es de un digito
  const formatTime = (val) => {
    return val < 10 ? `0${val}` : `${val}`;
  };

  //creacion de variables y funcion flecha tick
  const tick = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(`${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`);
  };

  return (
    <div className='clock'>
      <div className='screen'>
        <h1 className='time'>{time}</h1>
      </div>
    </div>
  );
};

