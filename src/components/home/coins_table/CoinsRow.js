import { useNavigate } from 'react-router-dom';
import NumberFormatter from '../../../helpers/NumberFormatter';
import ColorChange from '../../../helpers/ColorChange';

function CoinsRow({ coin }) {
    const {
        id,
        symbol,
        name,
        image,
        current_price: price,
        market_cap,
        market_cap_rank,
        total_volume: volume,
        price_change_percentage_24h: price_change,
        circulating_supply: supply,
    } = coin;

    const navigate = useNavigate();
    const textColor = new ColorChange;

// === Formating data ===
    const formatter = new NumberFormatter('usd');

    const price_format = formatter.format(
        price, 
        formatter.priceOptions()
    );

    const market_cap_format = formatter.format(
        market_cap, 
        formatter.bigPriceOptions()
    );

    const supply_format = formatter.format(
        supply,
        formatter.bigNumberOptions()    
    );

    const volume_format = formatter.format(
        volume, 
        formatter.bigPriceOptions()
    );

    const price_change_format = formatter.format(
        price_change, 
        { maximumFractionDigits: 2 }
    );

    const handle_click = () => {
        navigate(`/coins/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <tr onClick={() => handle_click()}>
            <td scope="row">{market_cap_rank}</td>

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

            <td>{price_format}</td>
            <td>{market_cap_format}</td>
            <td>{supply_format}</td>
            <td>{volume_format}</td>
            <td className={textColor.colorChange(price_change_format)}>
                {price_change_format}%
            </td>
        </tr>
    )
}

export default CoinsRow