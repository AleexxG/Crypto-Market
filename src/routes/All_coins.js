import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../components/all_coins/coins_table.css';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Market from "../components/all_coins/Market";
import Coins_table from "../components/all_coins/Coins_table";
import Pagination from "../components/all_coins/Pagination";

function All_coins() {
  const [coins, set_coins] = useState([]);
  const [current_page, set_current_page] = useState(1);
  const navigate = useNavigate();
  const { page } = useParams();
  const parsed_page = parseInt(page, 10);
  const [status, set_status] = useState({
      is_loading: false,
      error: null,
  })

  useEffect(() => {
    if (!isNaN(parsed_page)) {
      set_current_page(parsed_page);
    }

    const fetch_coins = async () => {
      try {
        set_status({ is_loading: true });

        const response = await fetch (
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${current_page}&sparkline=false`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        set_coins(data);
        set_status({ is_loading: false, error: null });
      }
      catch (error) {
        set_status({ is_loading: false, error: error });
        set_coins([]);
      }
    };

    fetch_coins();
  }, [current_page]);

  const handle_page_click = (e, page) => {
    e.preventDefault();
    set_current_page(page);
    navigate(`/page/${page}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Market 
        status = {status}
        set_status = {set_status}
      />
      
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
              {coins.map(coin => 
              {
                return (
                  <Coins_table 
                    key = {coin.id}
                    coin = {coin}
                  />
                )
              })}
            </tbody>
          </table>

          {status.is_loading && <Loading />}

          {status.error && <Error error = {status.error}/>}
          
        </div>

        <Pagination 
          current_page = {current_page}
          handle_click = {handle_page_click}
        />
        
      </section>
    </>
  )
}

export default All_coins;