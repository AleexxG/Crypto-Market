import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DisplayContent from '../helpers/DisplayContent.jsx';
import CoinInfo from '../components/coin/CoinInfo';
import Chart from '../components/coin/chart/ChartData.jsx';
import MarketStatus from '../components/coin/MarketStatus';
import NotFound from './NotFound.jsx';

function Coin() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);

  const { coinId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);

        const apiUrl = import.meta.env.VITE_REACT_APP_COINPULSE_API_URL;
        const response = await fetch(`${apiUrl}/coins/${coinId}`);

        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        document.title = `${data.name} price today | CoinPulse`;
        setCoin(data);
        setLoading(false);
      }
      catch (error) {
        setLoading(false);
        setCoin(false);
      }
    };

    fetchCoin();
  }, [coinId, navigate]);

  return (
    <>
      {coin ? DisplayContent(loading, null, 
        <>
          <CoinInfo coin = {coin}/>
          
          <Chart coinId = {coinId}/>

          <MarketStatus coin = {coin}/>
        </>
      ) : <NotFound />}
    </>
  )
}

export default Coin;