import './index.css';

import App from './App';
import { HashRouter } from 'react-router-dom'; // ✅ add this
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>   {/* ✅ wrap App */}
      <App />
    </HashRouter>
  </React.StrictMode>
);