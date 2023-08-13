import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../../../currency/CurrencyContext';
import NumberFormatter from '../../../helpers/NumberFormatter';
import ColorChange from '../../../helpers/ColorChange';

function CoinsRow({ coin }) {
    const {
        id,
        symbol,
        name,
        image,
        current_price: price,
        market_cap: marketCap,
        market_cap_rank: marketCapRank,
        total_volume: volume,
        price_change_percentage_24h: priceChange,
        circulating_supply: supply,
    } = coin;

    const { currency } = useCurrency();
    const navigate = useNavigate();

    const formatter = new NumberFormatter(currency);
    const textColor = new ColorChange();


    const priceFormat = formatter.format(
        price, 
        formatter.priceOptions()
    );

    const marketCapFormat = formatter.format(
        marketCap, 
        formatter.bigPriceOptions()
    );

    const supplyFormat = formatter.format(
        supply,
        formatter.bigNumberOptions()    
    );

    const volumeFormat = formatter.format(
        volume, 
        formatter.bigPriceOptions()
    );

    const priceChangeFormat = formatter.format(
        priceChange, 
        { maximumFractionDigits: 2 }
    );

    const handleCoinClick = () => {
        navigate(`/coins/${id}`);
        window.scrollTo(0, 0);
    };

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