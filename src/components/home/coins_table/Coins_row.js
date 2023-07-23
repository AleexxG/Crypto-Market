import React from 'react'
import { useNavigate } from 'react-router-dom';

function Coins_row({ coin }) {
    const navigate = useNavigate();

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

// === Formating data ===
    const format_number = (value, options) => {
        const format = new Intl.NumberFormat(undefined, options);
        return format.format(value);
    };

    const currency_format_options = {
        currency:'usd',
        style: 'currency',
        maximumFractionDigits: 2,
    };

    const price_format = format_number(price, currency_format_options);

    const market_cap_format = format_number(market_cap, {
        ...currency_format_options, 
        notation: 'compact',
    });

    const supply_format = format_number(supply, {
        maximumFractionDigits: 2,
        notation: 'compact',
    });

    const volume_format = format_number(volume, {
        ...currency_format_options,
        notation: 'compact',
    });

    const price_change_format = format_number(price_change, {
        maximumFractionDigits: 2,
    });

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
            {
                price_change < 0 ?
                (<td className='text-danger'>{price_change_format}%</td>) :
                (<td className='text-success'>{price_change_format}%</td>)
            }
        </tr>
    )
}

export default Coins_row