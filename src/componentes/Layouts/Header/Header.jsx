import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import ItemNavbar from '../../UI/ItemNavbar/ItemNavbar.jsx';
//se crea el header y su navbar
const Header = () => {
  return (
    <header className='w-full h-28 bg-cyan-900 flex justify-center items-center flex-wrap'>
    <a className='text-sky-500 p-2 text-5xl bg-slate-500' href="https://portafolio-react-theta.vercel.app/">Santiago Rojas Rodríguez</a>

    <Navbar />
    <ItemNavbar route='/' content='Inicio' />        
    <ItemNavbar route='/Contador' content='Contador' />
    <ItemNavbar route='/Timer' content='Timer' />
    <ItemNavbar route='/Clock' content='Clock' />
    <ItemNavbar route='/UserActive' content='UserActivation' />
    <Navbar />
  </header>

  );
};

export default Header;
