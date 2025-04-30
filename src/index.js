import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM per React 18
import './styles.css'; // Importa estils globals
import App from './App'; // Component principal
import { AppProvider } from './AppContext'; // Proveïdor del Context

// Crear el root per React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
