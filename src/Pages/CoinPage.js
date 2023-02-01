import React, { useEffect, useState } from 'react';
import CoinChart from '../Coin Components/CoinChart';
import Market from '../Coin Components/Market';
import { useLocation } from 'react-router-dom';
import '../App.css';


function CoinPage() {
  const location = useLocation();
  const [coin, setCoin] = useState([]);

  const [chart, setChart] = useState([]);
  const [days, setDays] = useState(1);

  useEffect(() => {
    (async () => {
        const endpoint1 = new URL(`https://api.coingecko.com/api/v3/coins/${location.state.id}`);
        const endpoint2 = new URL(`https://api.coingecko.com/api/v3/coins/${location.state.id}/market_chart?vs_currency=${location.state.currency}&days=${days}`);

        const response = await Promise.all([fetch(endpoint1), fetch(endpoint2)]);

        const data1 = await response[0].json();
        const data2 = await response[1].json();

        setCoin(data1);
        setChart(data2.prices);
    })();
  }, [location.state.id, location.state.currency, days])

  return (
    <div className='Coin_page'>
      <CoinChart
        coin={coin}
        currency={location.state.currency}
        symbol={location.state.symbol}
        chart = {chart}
        days = {setDays}
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