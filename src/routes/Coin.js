import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import CoinInfo from '../components/coin/CoinInfo';
import Chart from '../components/coin/Chart';
import MarketStatus from '../components/coin/MarketStatus';

function Coin() {
  const [coin, set_coin] = useState([]);
  const { coin_id } = useParams();
  const navigate = useNavigate();
  const [is_loading, set_is_loading] = useState(false);

  useEffect(() => {
    const fetch_coin = async () => {
      try {
        set_is_loading(true)

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin_id}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        set_coin(data);
        set_is_loading(false);
      }
      catch (error) {
        set_is_loading(false);
        set_coin([]);
        navigate('*');
      }
    };

    fetch_coin();
  }, [coin_id]);

  return (
    <main>

      {is_loading ? <Loading /> :
        <>
          <CoinInfo 
            coin = {coin}
          />
          
          <Chart 
            coin_id = {coin_id}
          />

          <MarketStatus 
            coin = {coin}
          />
        </>
      }

    </main>
  )
}

export default Coin;