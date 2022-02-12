import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyIp } from '../pages/myIP/MyIP';
import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation';
import { AlienIp } from '../pages/alienIp/AlienIP';

export const Routers = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<MyIp />} />
                <Route path="/alienIp" element={<AlienIp />} />
            </Routes>
        </>
    );
};
