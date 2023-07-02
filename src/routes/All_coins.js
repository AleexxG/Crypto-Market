import React, { useState, useEffect } from "react";
import '../components/all_coins/coins_table.css';
import Coin_row from "../components/all_coins/Coin_row";
import Crypto_news from "../components/all_coins/Crypto_news";

function All_coins() {
  const [coins, set_coins] = useState([]);
  const [exchanges, set_exchanges] = useState([]);

  useEffect(() => {
      (async () => {
          const all_coins = new URL(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`);
          const exchanges = new URL(`https://api.coingecko.com/api/v3/exchanges`);

          const response = await Promise.all([fetch(all_coins), fetch(exchanges)]);

          const data1 = await response[0].json();
          const data2 = await response[1].json();

          set_coins(data1);
          set_exchanges(data2);
      })();
  }, []);

  return (
    <main className="position-relative">

      <Crypto_news />
      
      <section className='table_section'>
        <div className="container table-responsive shadow p-3 mb-5 rounded color_bg">
          <table class="coins_table">
            <thead>
              <tr>
                <td scope="col">Rank</td>
                <td scope="col">Name</td>
                <td scope="col">Price</td>
                <td scope="col">Market Cap</td>
                <td scope="col">Volume (24Hr)</td>
                <td scope="col">Change (24Hr)</td>
              </tr>
            </thead>

            <tbody>
              {coins.map(coin => {
                return (
                  <Coin_row 
                    coin = {coin}
                  />
                )
              })}
            </tbody>

          </table>
        </div>
      </section>

    </main>
  )
}

export default All_coins;