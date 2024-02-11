import { useState, useEffect } from 'react';
import { useCurrency } from '../../currency/CurrencyContext';
import DisplayContetn from '../../helpers/DisplayContent';
import LineChart from './chart/LineChart';
import SelectDay from './chart/SelectDay';

function Chart({ coinId }) {
    const [chart, setChart] = useState([]);
    const [days, setDays] = useState(1);
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    const { currency } = useCurrency();


    useEffect(() => {
        const fetchChart = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setChart(data.prices);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setChart([]);
            }
        };

        fetchChart();
    }, [coinId, days, currency]);

    return (
        <section className='container'>

            <div className='d-flex justify-content-center align-items-center' 
                 style={{height: 380}}>

                {DisplayContetn(status.loading, status.error,
                    <LineChart 
                        chart = {chart}
                        days = {days}
                    />
                )}

            </div>

            <SelectDay 
                days = {days}
                setDays = {setDays}
            />

        </section>
    )
}

export default Chart;