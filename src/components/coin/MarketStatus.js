import NumberFormatter from '../../helpers/NumberFormatter.js';
import ColorChange from '../../helpers/ColorChange.js';

function MarketStatus({ coin }) {
    const formatter = new NumberFormatter('usd');
    const textColor = new ColorChange();

    const athPriceFormat = formatter.format(
        coin.market_data?.ath.usd, 
        formatter.priceOptions()
    );

    const marketCapFormat = formatter.format(
        coin.market_data?.market_cap.usd,
        formatter.bigPriceOptions()
    );

    const volumeFormat = formatter.format(
        coin.market_data?.total_volume.usd, 
        formatter.bigPriceOptions()
    );

    const supplyFormat = formatter.format(
        coin.market_data?.total_supply, 
        formatter.bigNumberOptions()
    );

    return (
        <section className='my-5'>
            <div className='container'>
                <h3 className='fw-normal border-bottom border-secondary pb-3'>Market Status</h3>
                
                <div className='row row-cols-md-4 row-cols-sm-3 row-cols-2 g-5 mt-1'>
                    <article>
                        <p className='text-uppercase text-secondary'>market cap</p>
                        <p className='fs-5'>{marketCapFormat}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>volume</p>
                        <p className='fs-5'>{volumeFormat}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>supply</p>
                        <p className='fs-5'>{supplyFormat}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>popularity</p>
                        <p className='fs-5'>#{coin.coingecko_rank}</p>
                    </article>

                    <article>
                        <p className='text-uppercase text-secondary'>all time high</p>
                        <p className='fs-5'>{athPriceFormat}</p>
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