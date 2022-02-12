import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
    return (
        <section className="nav">
            <div>
                <Link to="/">Узнать мой IP</Link>
            </div>
            <span>
                <Link to="/alienIp">Узнать данные по Ip</Link>
            </span>
        </section>
    );
};
