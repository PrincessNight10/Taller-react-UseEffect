import React, { useState, useEffect } from 'react';

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
    <div> 
      <h1>Contador: {C}</h1>
      <button onClick={incrementarC}>Incrementar</button>
    </div>
  );
};

