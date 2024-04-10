import { useCurrency } from '../../currency/CurrencyContext.jsx';
import NumberFormatter from '../../helpers/NumberFormatter.js';

function CoinInfo({ coin }) {
    const { currency } = useCurrency();
    const formatter = new NumberFormatter(currency);

    const priceFormat = formatter.format(
        coin.coin_market_data?.[currency]?.current_price,
        formatter.priceOptions(coin.coin_market_data?.[currency]?.current_price)
    );

    const marketCapFormat = formatter.format(
        coin.coin_market_data?.[currency]?.market_cap,
        formatter.bigPriceOptions()
    );

    const volumeFormat = formatter.format(
        coin.coin_market_data?.[currency]?.total_volume, 
        formatter.bigPriceOptions()
    );

    return (
        <section className='gradient'>
            <div className='container py-5 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={coin.image} 
                         alt={`${coin.name} logo`}
                         style={{maxWidth: '60px'}}>
                    </img>
                    <div className='ms-sm-5 ms-3'>
                        <h1 className='fs-3 fw-normal'>
                            {coin.name} <span className='fw-light fs-5 ms-2'>{coin.symbol?.toUpperCase()}</span>
                        </h1>
                        <p className='fw-bold fs-2'>{priceFormat}</p>
                    </div>
                </div>

                <aside className='d-sm-flex d-none'>
                    <div className='ms-sm-5 ms-3'>
                        <h1 className='fs-5 fw-normal'>Market Cap</h1>
                        <p className='fw-bold fs-2'>{marketCapFormat}</p>
                    </div>

                    <div className='ms-sm-5 ms-3 d-md-block d-none'>
                        <h1 className='fs-5 fw-normal'>Total Volume</h1>
                        <p className='fw-bold fs-2'>{volumeFormat}</p>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default CoinInfo;