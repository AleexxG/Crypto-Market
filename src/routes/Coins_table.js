import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import '../components/coins_table/coins_table.css';
import Top_coins from "../components/coins_table/Top_coins";
import Coin_row from "../components/coins_table/Coin_row";

function Coins_table() {
  const [coins, set_coins] = useState([]);
  //const [exchanges, set_exchanges] = useState([]);

  //const exchanges = `https://api.coingecko.com/api/v3/exchanges`;

  useEffect(() => {
    const all_coins = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
      );
      const data = await response.json();

      set_coins(data);
    };

    all_coins();
  }, []);

  const fetch_coins = async (page_number) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page_number}&sparkline=false`
    );
    const data = await response.json();
    return data;
  };

  const handle_page_click = async (data) => {
    let current_page = data.selected + 1;

    const new_page_coins = await fetch_coins(current_page);

    set_coins(new_page_coins);
    window.scrollTo(0, 0)
  };

  return (
    <main className="position-relative">

      <Top_coins />
      
      <section className='table_section'>
        <div className="container table-responsive shadow p-3 mb-5 rounded color_bg">
          <table class="coins_table">
            <thead>
              <tr>
                <td scope="col">#</td>
                <td scope="col">Name</td>
                <td scope="col">Price</td>
                <td scope="col">Market Cap</td>
                <td scope="col">Supply</td>
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

        <div className="container">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={92}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handle_page_click}
            className={'pagination justify-content-center mb-5 gap-sm-4 gap-2 fw-bold'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link bg-transparent border-0 text-white shadow-none'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link bg-transparent border-0 text-white shadow-none'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link bg-transparent border-0 text-white shadow-none'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link bg-transparent border-0 text-white shadow-none'}
            activeClassName={'active color_primary rounded-2'}
            activeLinkClassName = {'text-white shadow-none'}
          />
        </div>
      </section>

    </main>
  )
}

export default Coins_table;