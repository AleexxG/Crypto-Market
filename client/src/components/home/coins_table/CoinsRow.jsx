import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../../../currency/CurrencyContext';
import NumberFormatter from '../../../helpers/NumberFormatter';
import ColorChange from '../../../helpers/ColorChange';

function CoinsRow({ coin }) {
    const {
        slug: id,
        symbol,
        name,
        image,
        market_cap_rank: marketCapRank,
        circulating_supply: supply,
        coin_market_data: marketDataArray,
    } = coin;

    const { currency } = useCurrency();
    const navigate = useNavigate();
    
    const marketData = marketDataArray[0];
    const formatter = new NumberFormatter(currency);
    const textColor = new ColorChange();

    const priceFormat = formatter.format(
        marketData.current_price,
        formatter.priceOptions(marketData.current_price)
    );

    const marketCapFormat = formatter.format(
        marketData.market_cap, 
        formatter.bigPriceOptions()
    );

    const supplyFormat = formatter.format(
        supply,
        formatter.bigNumberOptions()    
    );

    const volumeFormat = formatter.format(
        marketData.total_volume, 
        formatter.bigPriceOptions()
    );

    const priceChangeFormat = formatter.format(
        marketData.price_change_percentage_24h, 
        { maximumFractionDigits: 2 }
    );

    function handleCoinClick() {
        navigate(`/coins/${id}`);
        window.scrollTo(0, 0);
    }

    return (
        <tr onClick={() => handleCoinClick()}>
            <td>{marketCapRank}</td>

            <td className='d-flex align-items-center gap-3'>
                <img 
                    src={image} 
                    alt={`${name} logo`}
                    style={{width: '30px', height: '30px'}}
                />

                <div>
                    <p>{name}</p>
                    <p>{symbol.toUpperCase()}</p>
                </div>
            </td>

            <td>{priceFormat}</td>
            <td>{marketCapFormat}</td>
            <td>{supplyFormat}</td>
            <td>{volumeFormat}</td>
            <td className={textColor.colorChange(priceChangeFormat)}>
                {priceChangeFormat}%
            </td>
        </tr>
    )
}

export default CoinsRow;