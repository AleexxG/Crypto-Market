import { useState, useEffect } from 'react';
import MarketData from './market/MarketData';
import Exchanges from './market/Exchanges';
import FollowUs from './market/FollowUs';

function Market() {
    const [marketData, setMarketData] = useState([]);
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    'https://api.coinlore.net/api/global/'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json();
                setMarketData(data[0]);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setMarketData([]);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                <MarketData 
                    marketData = {marketData}
                    status = {status}
                />

                <Exchanges />
                
                <FollowUs />

            </div>
        </section>
    )
}

export default Market;