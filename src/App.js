import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/!' element={<HomePage />} />
      <Route path='/coins/:id' element={<CoinPage />} />
    </Routes>
  );
}

export default App;