import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './App.jsx'; // ✅ imports your Profile component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
);

