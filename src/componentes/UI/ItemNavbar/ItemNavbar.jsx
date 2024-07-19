import React from 'react';
import { NavLink } from 'react-router-dom'
import './ItemNavbar.css'
//se conforma el intemnavbar desde aqui y esto se herdara a navbar

export const ItemNavbar = 
({route,content}) => <li className='Apply'><NavLink className='Style_i' to={route}>{content}</NavLink></li>

export default ItemNavbar;
