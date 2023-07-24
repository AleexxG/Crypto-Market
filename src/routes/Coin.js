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

  const format_number = (value, options) => {
    const format = new Intl.NumberFormat(undefined, options);
    return format.format(value);
  };

  const currency_format_options = {
      currency:'usd',
      style: 'currency',
      maximumFractionDigits: 2,
  };

  return (
    <main>

      {is_loading ? <Loading /> :
        <>
          <Coin_info 
            coin = {coin}
            format_number = {format_number}
            currency_format_options = {currency_format_options}
          />
          
          <Chart 
            coin_id = {coin_id}
          />

          <Market_status 
            coin = {coin}
            format_number = {format_number}
            currency_format_options = {currency_format_options}
          />
        </>
      }

    </main>
  )
}

export default Coin;