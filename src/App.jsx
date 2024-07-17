import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Header from './componentes/Layouts/Header/Header.jsx';
import { Inicio } from './componentes/Pages/Inicio/Inicio.jsx';
import { Contador } from './componentes/Pages/ContadorClick/Contador.jsx';
import { Timer } from './componentes/Pages/Timer/Timer.jsx';
import { Clock } from './componentes/Pages/DigitalClock/Clock.jsx';
import { UserActive } from './componentes/Pages/userActive/UserActive.jsx';
import './App.css';
//se define la estructira  y rutas del proyecto
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Contador' element={<Contador />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path='/Clock' element={<Clock />} />
        <Route path='/UserActive' element={<UserActive />} />
      </Routes>
    </>
  );
}

export default App;

