import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import '../components/all_coins/coins_table.css';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Market from "../components/all_coins/Market";
import Coins_table from "../components/all_coins/Coins_table";

function All_coins({error, set_error, is_loading, set_is_loading}) {
  const [coins, set_coins] = useState([]);

  useEffect(() => {
    const all_coins = async () => 
    {
      try {
        set_is_loading(true);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
        );

        if (!response.ok)
        {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        set_coins(data);
        set_is_loading(false);
      }
      catch (error)
      {
        set_error(error);
        set_is_loading(false);
      }
    };
    all_coins();
  }, []);

  const fetch_coins = async (page_number) => {
    try 
    {
      set_is_loading(true);

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page_number}&sparkline=false`
      );

      if (!response.ok)
      {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      set_is_loading(false);
      return data;
    }
    catch (error)
    {
      set_error(error);
      set_is_loading(false);
      return [];
    }
  };

  const handle_page_click = async (data) => {
    let current_page = data.selected + 1;

    const new_page_coins = await fetch_coins(current_page);

    set_coins(new_page_coins);
    window.scrollTo(0, 0);
  };

  return (
    <main>

      <Market />
      
      <section className='table_section container'>
        <div className="table-responsive shadow p-3 mb-5 rounded color_bg">
          <table className="coins_table">
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
                  <Coins_table 
                    key = {coin.id}
                    coin = {coin}
                  />
                )
              })}
            </tbody>
          </table>

          {error && <Error error = {error}/>}
          
          {is_loading && <Loading />}
          
        </div>

        <div className="container">
          <ReactPaginate
            previousLabel = {'<'}
            nextLabel = {'>'}
            breakLabel = {'...'}
            pageCount = {92}
            marginPagesDisplayed = {1}
            pageRangeDisplayed = {3}
            onPageChange = {handle_page_click}
            className = {'pagination justify-content-center mb-5 gap-sm-4 gap-2 fw-bold'}
            pageClassName = {'page-item'}
            pageLinkClassName = {'page-link bg-transparent border-0 text-white shadow-none'}
            previousClassName = {'page-item'}
            previousLinkClassName = {'page-link bg-transparent border-0 text-white shadow-none'}
            nextClassName = {'page-item'}
            nextLinkClassName = {'page-link bg-transparent border-0 text-white shadow-none'}
            breakClassName = {'page-item'}
            breakLinkClassName = {'page-link bg-transparent border-0 text-white shadow-none'}
            activeClassName = {'active color_primary rounded-2'}
            activeLinkClassName = {'text-white shadow-none'}
          />
        </div>
      </section>

    </main>
  )
}

export default All_coins;