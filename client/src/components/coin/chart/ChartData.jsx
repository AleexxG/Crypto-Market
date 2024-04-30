import { useState, useEffect } from 'react';
import { useCurrency } from '../../../contexts/CurrencyContext.jsx';
import DisplayContent from '../../../helpers/DisplayContent.jsx';
import LineChart from './LineChart.jsx';
import SelectDay from './SelectDay.jsx';

function Chart({ coinId }) {
    const { currency } = useCurrency();
    const [chart, setChart] = useState([]);
    const [days, setDays] = useState(1);
    const [status, setStatus] = useState({loading: false, error: null});

    useEffect(() => {
        const fetchChart = async () => {
            try {
                setStatus({ loading: true });

                const apiUrl = import.meta.env.VITE_REACT_APP_COINGECKO_API_URL;
                const response = await fetch(
                    `${apiUrl}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
                );

                if (!response.ok) throw new Error('Network response was not ok');

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

                {DisplayContent(status.loading, status.error,
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