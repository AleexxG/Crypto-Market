import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import All_coins from './routes/All_coins';
import Coin from './routes/Coin';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<All_coins />} />
        <Route path='/!' element={<All_coins />} />
        <Route path='/coins/:id' element={<Coin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;