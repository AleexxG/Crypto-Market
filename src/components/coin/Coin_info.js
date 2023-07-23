import React from 'react'

function Coin_info({ coin, format_number, currency_format_options }) {
    const price_format = format_number(
        coin.market_data?.current_price.usd, 
        currency_format_options
    );

    const market_cap_format = format_number(
        coin.market_data?.market_cap.usd, {
            ...currency_format_options,
            notation: 'compact',
        }
    );

    const volume_format = format_number(
        coin.market_data?.total_volume.usd, {
            ...currency_format_options,
            notation: 'compact',
        }
    );

    return (
        <section className='gradient'>
            <div className='container py-5 d-flex justify-content-between align-items-center'>
                <article className='d-flex align-items-center'>
                    <img src={coin.image?.small} 
                         alt={`${coin.name} logo`}>
                    </img>
                    <div className='ms-sm-5 ms-3'>
                        <p className='fs-3'>
                            {coin.name} <span className='fw-light fs-5 ms-2'>{coin.symbol?.toUpperCase()}</span>
                        </p>
                        <p className='fw-bold fs-2'>{price_format}</p>
                    </div>
                </article>

                <aside className='d-sm-flex d-none'>
                    <div className='ms-sm-5 ms-3'>
                        <p className='fs-5'>Market Cap</p>
                        <p className='fw-bold fs-2'>{market_cap_format}</p>
                    </div>

                    <div className='ms-sm-5 ms-3 d-md-block d-none'>
                        <p className='fs-5'>Total Volume</p>
                        <p className='fw-bold fs-2'>{volume_format}</p>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Coin_info