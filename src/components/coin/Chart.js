import { useState, useEffect } from 'react';
import LineChart from './LineChart';
import Loading from '../Loading';
import Error from '../Error';

function Chart({ coinId }) {
    const [chart, setChart] = useState([]);
    const [days, setDays] = useState(7);
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchChart = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setChart(data.prices);
                setStatus({ loading: false, error: null });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setChart([]);
            }
        };

        fetchChart();
    }, [coinId, days]);

    return (
        <section className='container'>

            {status.loading && <Loading />}
            {status.error && <Error />}

            {!status.loading && !status.error && (
                <LineChart 
                    chart = {chart}
                    days = {days}
                />
            )}

        </section>
    )
}

export default Chart;