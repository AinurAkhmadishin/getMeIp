import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="nav__link">
        Узнать данные по IP
      </NavLink>

      <NavLink to="/myIP" className="nav__link">
        Свой IP
      </NavLink>
    </div>
  );
};
