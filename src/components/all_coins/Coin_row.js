import React from 'react'

function Coins_table(props) {

    const format_number = (value, options) => {
        const format = new Intl.NumberFormat(undefined, options);
        return format.format(value);
    }

    const currency_format_options = {
        currency:'usd',
        style: 'currency',
        maximumFractionDigits: 2,
    }

    const symbol = props.coin.symbol.toUpperCase();

    const price = props.coin.current_price;
    const price_format = format_number(price, currency_format_options);

    const market_cap = props.coin.market_cap;
    const market_cap_format = format_number(market_cap, {
        ...currency_format_options, 
        notation: 'compact',
    });

    const supply = props.coin.circulating_supply;
    const supply_format = format_number(supply, {
        maximumFractionDigits: 2,
        notation: 'compact',
    });

    const volume = props.coin.total_volume;
    const volume_format = format_number(volume, {
        ...currency_format_options,
        notation: 'compact',
    });

    const change = props.coin.price_change_percentage_24h;
    const change_format = format_number(change, {
        maximumFractionDigits: 2,
    });

    return (
        <tr>
            <td scope="row">
                {props.coin.market_cap_rank}
            </td>

            <td className='d-flex align-items-center gap-3'>
                <img 
                    src={props.coin.image} 
                    alt={`${props.coin.name} logo`}
                    style={{width: '30px', height: '30px'}}
                />

                <div>
                    <p style={{fontSize: '0.9rem'}}>{props.coin.name}</p>
                    <p style={{fontSize: '0.9rem'}}>{symbol}</p>
                </div>
            </td>

            <td>{price_format}</td>
            <td>{market_cap_format}</td>
            <td>{supply_format}</td>
            <td>{volume_format}</td>
            <td>{change_format}%</td>
        </tr>
    )
}

export default Coins_table