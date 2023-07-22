import React from 'react'
import Error from '../../Error';
import Loading from '../../Loading';

function Market_data({ market_data, status }) {
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

            {!status.is_loading && !status.error && (
                <ul className='list-unstyled'>
                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-coins me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Market cap change</p>
                        </div>
                        <p className={text_color(market_data.mcap_change)}>
                            {market_data.mcap_change}%
                        </p>
                    </li>

                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-chart-simple me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Volume change</p>
                        </div>
                        <p className={text_color(market_data.volume_change)}>
                            {market_data.volume_change}%
                        </p>
                    </li>

                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-brands fa-bitcoin me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Bitcoin dominance</p>
                        </div>
                        <p>{market_data.btc_d}%</p>
                    </li>
                </ul>
            )}
        </article>
    )
}

export default Market_data