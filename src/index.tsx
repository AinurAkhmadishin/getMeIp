import React from 'react';
import { render } from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './app';
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
