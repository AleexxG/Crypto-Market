import React, { useState, useEffect } from "react";
import Search from './Home Components/search/Search';
import CoinsTable from './Home Components/coinsTable/CoinsTable';
import Info from './Home Components/info/Info';
import '../App.css';

function HomePage() {
  const [coins, setCoins] = useState([]);
    const [coinsInfo, setCoinsInfo] = useState([]);

    useEffect(() => {
        (async () => {
            const endpoint1 = new URL('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            const endpoint2 = new URL('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h');

            const response = await Promise.all([fetch(endpoint1), fetch(endpoint2)]);

            const data1 = await response[0].json();
            const data2 = await response[1].json();

            setCoins(data1);
            setCoinsInfo(data2);
        })();
    }, [])

  return (
    <div className="App">
      <Search />
      <main className="content">
            <CoinsTable
                coins={coins}
            />
            <Info
                coins={coins}
                coinsInfo={coinsInfo}
            />
        </main>
    </div>
  )
}

export default HomePage;