import { useCurrency } from '../../currency/CurrencyContext.js';
import NumberFormatter from '../../helpers/NumberFormatter.js';

function CoinInfo({ coin }) {
    const { currency } = useCurrency();
    const formatter = new NumberFormatter(currency);

    const priceFormat = formatter.format(
        coin.market_data?.current_price[currency],
        formatter.priceOptions()
    );

    const marketCapFormat = formatter.format(
        coin.market_data?.market_cap[currency],
        formatter.bigPriceOptions()
    );

    const volumeFormat = formatter.format(
        coin.market_data?.total_volume[currency], 
        formatter.bigPriceOptions()
    );

    return (
        <section className='gradient'>
            <div className='container py-5 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={coin.image?.small} 
                         alt={`${coin.name} logo`}>
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