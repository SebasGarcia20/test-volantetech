import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';


//componentes rutas
import { Login } from './views/Login/Login';
import { Home } from './views/Home/Home';

const root = createRoot(
  document.getElementById("root")
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
