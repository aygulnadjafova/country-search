import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

// Style
import "./assets/scss/index.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
