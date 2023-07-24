import NumberFormatter from '../../helpers/NumberFormatter.js';
import ColorChange from '../../helpers/ColorChange.js';

function MarketStatus({ coin }) {
    const formatter = new NumberFormatter('usd');
    const textColor = new ColorChange;

    const all_time_high_format = formatter.format(
        coin.market_data?.ath.usd, 
        formatter.priceOptions()
    );

    const market_cap_format = formatter.format(
        coin.market_data?.market_cap.usd,
        formatter.bigPriceOptions()
    );

    const volume_format = formatter.format(
        coin.market_data?.total_volume.usd, 
        formatter.bigPriceOptions()
    );

    const supply_format = formatter.format(
        coin.market_data?.total_supply, 
        formatter.bigNumberOptions()
    );

    const text_color = (data) => {
        let color = '';

        if (data > 0) {
            return color = 'text-success';
        }
        else {
            return color = 'text-danger';
        }
    };

    return (
        <section className='my-5'>
            <div className='container'>
                <h3 className='fw-normal border-bottom border-secondary pb-3'>Market Status</h3>
                
                <div className='row row-cols-md-4 row-cols-sm-3 row-cols-2 g-5 mt-1'>
                    <article>
                        <p className='text-uppercase text-secondary'>market cap</p>
                        <p className='fs-5'>{market_cap_format}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>volume</p>
                        <p className='fs-5'>{volume_format}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>supply</p>
                        <p className='fs-5'>{supply_format}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>popularity</p>
                        <p className='fs-5'>#{coin.coingecko_rank}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>all time high</p>
                        <p className='fs-5'>{all_time_high_format}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>price change (24H)</p>
                        <p className={`${textColor.colorChange(coin.market_data?.price_change_percentage_24h)} fs-5`}>{
                            formatter.format(
                                    coin.market_data?.price_change_percentage_24h, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>price change (7D)</p>
                        <p className={`${textColor.colorChange(coin.market_data?.price_change_percentage_7d)} fs-5`}>{
                            formatter.format(
                                    coin.market_data?.price_change_percentage_7d, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>price change (30D)</p>
                        <p className={`${textColor.colorChange(coin.market_data?.price_change_percentage_30d)} fs-5`}>{
                            formatter.format(
                                    coin.market_data?.price_change_percentage_30d, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default MarketStatus;