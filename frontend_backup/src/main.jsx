// main.jsx
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // 可选，如果你有全局样式

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
