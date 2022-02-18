import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <HashRouter>
      <Link to="/" className="nav__link">
        Узнать данные по IP
      </Link>

      <Link to="/myIP" className="nav__link">
        Свой IP
      </Link>
    </HashRouter>
  );
};
