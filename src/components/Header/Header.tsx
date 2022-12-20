import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <div className={s.header}>
      <div className="container">
        <h1 className={s.title}>Note application</h1>
      </div>
    </div>
  );
};

export default Header;
