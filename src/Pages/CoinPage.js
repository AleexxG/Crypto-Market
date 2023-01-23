import React from 'react';
import Chart from '../Coin Components/Chart';
import Market from '../Coin Components/Market';
import '../App.css';

function CoinPage() {
  return (
    <div className='Coin_page'>
      <Chart />
      <Market />
    </div>
  )
}

export default CoinPage;