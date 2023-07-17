import { useState, useEffect } from 'react'
import Error from '../../Error';
import Loading from '../../Loading';

function Market_data({ status, set_status }) {
    const [market_data, set_market_data] = useState([]);

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

    const text_color = (data) => {
        let color = ''

        if (data < 0) {
            return color = 'text-danger';
        }
        else {
            return color = 'text-success';
        }
    };

    return (
        <article className='color_bg w-100 rounded-2 px-4 py-3'>
            <h5 className='border-bottom pb-3'>📊 Today's Market</h5>

            {status.is_loading && <Loading />}

            {status.error && <Error error = {status.error}/>}

            <ul className='list-unstyled'>
                <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                    <p>Market cap change</p>
                    <p className={text_color(market_data.mcap_change)}>
                        {market_data.mcap_change}%
                    </p>
                </li>

                <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                    <p>Volume change</p>
                    <p className={text_color(market_data.volume_change)}>
                        {market_data.volume_change}%
                    </p>
                </li>

                <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                    <p>Bitcoin dominance</p>
                    <p>{market_data.btc_d}%</p>
                </li>
            </ul>
        </article>
    )
}

export default Market_data