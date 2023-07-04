import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Coins_table from './routes/Coins_table';
import Coin from './routes/Coin';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins_table />} />
        <Route path='/!' element={<Coins_table />} />
        <Route path='/coins/:id' element={<Coin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;