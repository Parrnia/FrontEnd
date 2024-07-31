import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App1 from './pages/landing/landingpage';
//import App from './pages/login/Home'
// import App1 from './pages/manageEvent/EventManagement'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

