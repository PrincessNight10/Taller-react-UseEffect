import React from 'react';
//se hace la herdacion desde internavbar con children
const Navbar = ({ children }) => {
  return (
    <nav>
      {children}
    </nav>
  );
};

export default Navbar;