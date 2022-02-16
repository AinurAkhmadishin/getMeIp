import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyIp } from '../pages/myIP/MyIP';
import { Navigation } from '../components/navigation/Navigation';
import { AlienIp } from '../pages/alienIp/AlienIP';

export const Routers = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/myIp" element={<MyIp />} />
        <Route path="/" element={<AlienIp />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};
