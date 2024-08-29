// src/app.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './sobre';
// Importe outros componentes conforme necessário

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        {/* Defina outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default App;
