// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // ✅ Importa o CSS aqui, fora do arquivo CSS

const root = createRoot(document.getElementById('root'));
root.render(<App />);
