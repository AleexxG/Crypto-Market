import React, { useEffect, useState } from 'react';
import Chart from '../Coin Components/Chart';
import Market from '../Coin Components/Market';
import { useLocation } from 'react-router-dom';
import '../App.css';


function CoinPage() {
  const location = useLocation();
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    (async () => {
        const endpoint = new URL(`https://api.coingecko.com/api/v3/coins/${location.state.id}`);
        const response = await fetch(endpoint);
        const data = await response.json();

        setCoin(data);
    })();
}, [location.state.id])

  return (
    <div className='Coin_page'>
      <Chart 
        coin={coin}
        currency={location.state.currency}
        symbol={location.state.symbol}
      />
      <Market 
        coin={coin}
        currency={location.state.currency}
        symbol={location.state.symbol}
      />
    </div>
  )
}

export default CoinPage;