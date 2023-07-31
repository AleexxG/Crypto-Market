import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import CoinInfo from '../components/coin/CoinInfo';
import Chart from '../components/coin/Chart';
import MarketStatus from '../components/coin/MarketStatus';

function Coin({ currency }) {
  const [coin, setCoin] = useState([]);
  const { coinId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCoin(data);
        setLoading(false);
      }
      catch (error) {
        setLoading(false);
        setCoin([]);
        navigate('*');
      }
    };

    fetchCoin();
  }, [coinId, navigate]);

  return (
    <>

      {loading ? <Loading /> :
        <>
          <CoinInfo 
            currency = {currency}
            coin = {coin}
          />
          
          <Chart 
            currency = {currency}
            coinId = {coinId}
          />

          <MarketStatus 
            currency = {currency}
            coin = {coin}
          />
        </>
      }

    </>
  )
}

export default Coin;