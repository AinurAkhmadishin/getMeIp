import React from 'react';
import { Routers } from '../routers/Routers';
import './app.scss';
import { Footer } from '../components/footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Routers />
      <Footer />
    </div>
  );
};

export default App;
