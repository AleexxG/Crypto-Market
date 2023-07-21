import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Coin_info from '../components/coin/Coin_info';
import Chart from '../components/coin/Chart';
import Market_status from '../components/coin/Market_status';

function Coin() {
  const [coin, set_coin] = useState([]);
  const { coin_id } = useParams();
  const navigate = useNavigate();
  const [status, set_status] = useState({
    is_loading: false,
  })

  useEffect(() => {
    const fetch_coin = async () => {
      try {
        set_status({ is_loading: true })

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin_id}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        set_coin(data);
        set_status({ is_loading: false });
      }
      catch (error) {
        set_status({ is_loading: false });
        set_coin([]);
        navigate('*');
      }
    };

    fetch_coin();
  }, [coin_id]);

  return (
    <main>

      {status.is_loading && <Loading />}

      <Coin_info />
      <Chart />
      <Market_status />
    </main>
  )
}

export default Coin;