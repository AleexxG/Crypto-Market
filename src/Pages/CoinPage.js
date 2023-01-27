import React from 'react';
import Chart from '../Coin Components/Chart';
import Market from '../Coin Components/Market';
import {useLocation} from 'react-router-dom';
import '../App.css';


function CoinPage(route) {
  const location = useLocation();

  return (
    <div className='Coin_page'>
      <Chart 
        coin={location.state.id}
      />
      <Market 
        coin={location.state.id}
      />
    </div>
  )
}

export default CoinPage;