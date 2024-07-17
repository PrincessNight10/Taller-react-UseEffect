import React from 'react';
import { NavLink } from 'react-router-dom'
//se coinfoirma el intemnavbar desde aqui y esto se herdara a navbar
export const ItemNavbar = 
({route,content}) => <li className='Apply'><NavLink className='Style_i' to={route}>{content}</NavLink></li>

export default ItemNavbar;
