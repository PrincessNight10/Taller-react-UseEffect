import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import ItemNavbar from '../../UI/ItemNavbar/ItemNavbar.jsx';
import './Header.css'; // Importa  estilos  Header.CSS

//creacion componentes header
const Header = () => {
  return (
    <header className='CH'>
      <a>Santiago Rojas Rodríguez ADSO: 2722493.</a>
      
      <Navbar />
      <ItemNavbar route='/' content='Inicio' />        
      <ItemNavbar route='/Contador' content='Contador' />
      <ItemNavbar route='/Timer' content='Timer' />
      <ItemNavbar route='/Clock' content='Clock' />
      <ItemNavbar route='/UserActive' content='UserActivation' />
    </header>
  );
};

export default Header;
