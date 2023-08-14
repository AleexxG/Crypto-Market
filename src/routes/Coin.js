import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DisplayContetn from '../helpers/DisplayContent';
import CoinInfo from '../components/coin/CoinInfo';
import Chart from '../components/coin/Chart';
import MarketStatus from '../components/coin/MarketStatus';

function Coin() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);

  const { coinId } = useParams();
  const navigate = useNavigate();

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
        document.title = `${data.name} price today | CoinPulse`;
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
      {DisplayContetn(loading, null, 
        <>
          <CoinInfo 
            coin = {coin}
          />
          
          <Chart 
            coinId = {coinId}
          />

          <MarketStatus 
            coin = {coin}
          />
        </>
      )}
    </>
  )
}

export default Coin;