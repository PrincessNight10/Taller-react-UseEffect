import React, { useState, useEffect } from 'react';
import './Contador.css'
export const Contador = () => {
  const [C, setC] = useState(0);

//useeffects actualizara el titulo de la pajina cuando cambia el contador
  useEffect(() => {
    document.title = `Contador: ${C}`; //se establece el titulo de la página
  }, [C]); /// se cambia el efecto cuando count cambia osea cambia el titulo
//se crea la funcion incrementc para el contador
  const incrementarC = () => {
    setC(C+ 1);
  };



  return (
    <div className='C'>  
      <h1 className='tittle'>Contador: {C}</h1>
      <button className = 'R'onClick={incrementarC}>Incrementar</button>
    </div>
  );
};

