import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
  const toggleTheme = theme => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  };

  return (
    <div className='navbar'>
      <div>Navbar</div>
      <div>
        <span className='theme-toggle' onClick={() => toggleTheme('light')}>Light</span>/
        <span className='theme-toggle' onClick={() => toggleTheme('dark')}>Dark</span>
      </div>
    </div>
  );
};
