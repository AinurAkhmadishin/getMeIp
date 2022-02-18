import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__link">
        Узнать данные по IP
      </Link>

      <Link to="/myIP" className="nav__link">
        Свой IP
      </Link>
    </div>
  );
};
