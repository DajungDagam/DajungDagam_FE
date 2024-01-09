import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <CookiesProvider>
  <div  className="index-body">
    <App />
  </div>
  </CookiesProvider>
);

reportWebVitals();
