import { useCurrency } from '../../contexts/CurrencyContext.jsx';
import NumberFormatter from '../../helpers/NumberFormatter.js';
import ColorChange from '../../helpers/ColorChange.js';

function MarketStatus({ coin }) {
    const { currency } = useCurrency();
    const formatter = new NumberFormatter(currency);
    const textColor = new ColorChange();

    const athPriceFormat = formatter.format(
        coin.coin_market_data?.[currency].ath, 
        formatter.priceOptions(coin.coin_market_data?.[currency].ath)
    );

    const marketCapFormat = formatter.format(
        coin.coin_market_data?.[currency].market_cap,
        formatter.bigPriceOptions()
    );

    const volumeFormat = formatter.format(
        coin.coin_market_data?.[currency].total_volume, 
        formatter.bigPriceOptions()
    );

    const supplyFormat = formatter.format(
        coin.circulating_supply, 
        formatter.bigNumberOptions()
    );

    return (
        <section className='my-5'>
            <div className='container'>
                <h1 className='fw-normal fs-3 border-bottom border-secondary pb-3'>Market Status</h1>
                
                <div className='row row-cols-md-4 row-cols-sm-3 row-cols-2 g-5 mt-1'>
                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>market cap</h1>
                        <p className='fs-5'>{marketCapFormat}</p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>volume</h1>
                        <p className='fs-5'>{volumeFormat}</p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>supply</h1>
                        <p className='fs-5'>{supplyFormat}</p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>market cap rank</h1>
                        <p className='fs-5'>#{coin.market_cap_rank}</p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>all time high</h1>
                        <p className='fs-5'>{athPriceFormat}</p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>price change (24H)</h1>
                        <p className={`${textColor.colorChange(coin.coin_market_data?.[currency].price_change_percentage_24h)} fs-5`}>{
                            formatter.format(
                                    coin.coin_market_data?.[currency].price_change_percentage_24h, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>price change (7D)</h1>
                        <p className={`${textColor.colorChange(coin.coin_market_data?.[currency].price_change_percentage_7d)} fs-5`}>{
                            formatter.format(
                                    coin.coin_market_data?.[currency].price_change_percentage_7d, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </div>

                    <div>
                        <h1 className='fs-6 fw-normal text-uppercase text-secondary'>price change (30D)</h1>
                        <p className={`${textColor.colorChange(coin.coin_market_data?.[currency].price_change_percentage_30d)} fs-5`}>{
                            formatter.format(
                                    coin.coin_market_data?.[currency].price_change_percentage_30d, 
                                    { maximumFractionDigits: 2 }
                                )
                            }%
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketStatus;