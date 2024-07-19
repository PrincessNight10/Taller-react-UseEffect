import React, { useState, useEffect } from 'react';
import './UserActive.css';
// Definir usuarios
const Users = [
  { user: 'Leonardo Davinci', password: '1346' },
  { user: 'Messi', password: '4512' },
];

export const UserActive = () => {
  //se define estados a usar en componente
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  
//efecto que se usa cuando cambian user y loggedIn
  useEffect(() => {
    if (loggedIn) {
      const userFound = Users.find(u => u.user === user);
      if (userFound) {
        setUserName(userFound.user);
      }
    } else {
      setUserName('');
    }
  }, [loggedIn, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

//validar usuario y contraseña
    const validUser = Users.find(u => u.user === user && u.password === password);

    if (validUser) {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('usuario o contraseña incorrecto');
    }
  };

  const handleLogout = () => {
    setUser('');
    setPassword('');
    setLoggedIn(false);
    setError('');
    setUserName('');
  };
//estructura componente
  return (
    <div>
      {loggedIn ? (
        <div className='N'>
          <h1 className='B'>Bienvenido {userName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2 className='B'>Bienvenido Anonimo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='P'>Usuario:</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div>
              <label className=''>Contraeña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button  className ='L' type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};


