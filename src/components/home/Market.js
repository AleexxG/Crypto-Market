import { useState, useEffect } from 'react'
import Market_data from './market/Market_data'
import Exchanges from './market/Exchanges'
import Follow_us from './market/Follow_us'

function Market() {
    const [market_data, set_market_data] = useState([]);
    const [status, set_status] = useState({
        is_loading: false,
        error: null,
    })

    useEffect(() => {
        const fetch_market_data = async () => {
            try {
                set_status({ is_loading: true })

                const response = await fetch(
                    'https://api.coinlore.net/api/global/'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json();
                set_market_data(data[0]);
                set_status({ is_loading: false, error: null });
            }
            catch (error) {
                set_status({ is_loading: false, error: error });
                set_market_data([]);
            }
        };

        fetch_market_data();
    }, []);

    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                <Market_data 
                    market_data = {market_data}
                    status = {status}
                />

                <Exchanges />
                
                <Follow_us />

            </div>
        </section>
    )
}

export default Market