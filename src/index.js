import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './providers/provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);


