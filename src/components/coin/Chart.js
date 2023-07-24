import { useState, useEffect } from 'react'
import LineChart from './LineChart';

function Chart({ coin_id }) {
    const [chart, set_chart] = useState([]);
    const [days, set_days] = useState(7);
    const [status, set_status] = useState({
        is_loading: false,
        error: null,
    })

    useEffect(() => {
        const fetch_chart = async () => {
            try {
                set_status({ is_loading: true });

                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=${days}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                set_chart(data.prices);
                set_status({ is_loading: false, error: null });
            }
            catch (error) {
                set_status({ is_loading: false, error: error })
                set_chart([]);
            }
        };

        fetch_chart();
    }, []);

    return (
        <section className='container'>

            <LineChart 
                chart = {chart}
                days = {days}
            />

        </section>
    )
}

export default Chart;