import React, { useState, useEffect} from 'react';
import './App.css';
import Search from './search/Search';
import Coins from './coins/Coins';
import Info from  './Info/Info';

function App() {

  const [coins, setCoins] = useState([]);
  const [coinsInfo, setCoinsInfo] = React.useState([]);

  useEffect(() => {
      (async () => {
          const allCoins = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");
          const trendingCoins = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h");

          const response = await Promise.all([fetch(allCoins), fetch(trendingCoins)]);

          const data1 = await response[0].json();
          const data2 = await response[1].json();

          setCoins(data1);
          setCoinsInfo(data2);
      })();
  }, [])

  const displayCoins = coins.map(coin => {
    return (
      <Coins
        key={coin.id}
        image={coin.image}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        marketCap={coin.market_cap}
        volume={coin.total_volume}
        supply={coin.total_supply}
      />
    )
  })

  function topFiveGainers() {
    coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    const topFive = coins.slice(0, 5);
    console.log(topFive);
  }

  function topFiveLosers() {
      coins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
      const topFive = coins.slice(0, 5);
      console.log(topFive);
  }

  const displayInfo = coinsInfo.map(coin => {
    return (
      <Info
        key={coin.id}
        image={coin.image}
        name={coin.name}
        symbol={coin.symbol}
        price={coin.current_price}
        priceChange={coin.price_change_percentage_24h}
        gainers={topFiveGainers()}
        losers={topFiveLosers()}
      />
    )
  })

  return (
    <div className="App">
      <Search />
      <div className="content">
        <main className='main'>
          <h3 className="main_title">Crypto prices <span>9999 assets</span> </h3>
          
          <table className="table table-hover table-borderless">
              <thead className="parameters">
                  <tr>
                      <th className="par_name" scope="col">Name</th>
                      <th className="par_price" scope="col">Price</th>
                      <th className="par_change" scope="col">Change</th>
                      <th className="par_mc" scope="col">Market cap</th>
                      <th className="par_volume" scope="col">Volume 24h</th>
                      <th className="par_supply" scope="col">Supply</th>
                  </tr>
              </thead>

              <tbody className="coin_list">
                {displayCoins}
              </tbody>
          </table>
        </main>

        <div className='info'>
            <aside className="gainers">
                <h3>Biggest Gainers <span>24h</span> </h3>
                
                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                      {displayInfo}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Biggest Losers <span>24h</span> </h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {displayInfo}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Trending</h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                      {displayInfo}
                    </tbody>
                </table>
            </aside>
        </div>
      </div>
    </div>
  );
}

export default App;