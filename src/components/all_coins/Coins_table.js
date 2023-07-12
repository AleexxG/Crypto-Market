import React from 'react'

function Coins_table({ coin }) {

// === Formating data ===
    const format_number = (value, options) => 
    {
        const format = new Intl.NumberFormat(undefined, options);
        return format.format(value);
    }

    const currency_format_options = 
    {
        currency:'usd',
        style: 'currency',
        maximumFractionDigits: 2,
    };

    const symbol = coin.symbol.toUpperCase();

    const price = coin.current_price;
    const price_format = format_number(price, currency_format_options);

    const market_cap = coin.market_cap;
    const market_cap_format = format_number(market_cap, 
    {
        ...currency_format_options, 
        notation: 'compact',
    });

    const supply = coin.circulating_supply;
    const supply_format = format_number(supply, 
    {
        maximumFractionDigits: 2,
        notation: 'compact',
    });

    const volume = coin.total_volume;
    const volume_format = format_number(volume, 
    {
        ...currency_format_options,
        notation: 'compact',
    });

    const change = coin.price_change_percentage_24h;
    const change_format = format_number(change, 
    {
        maximumFractionDigits: 2,
    });

    return (
        <tr>
            <td scope="row">{coin.market_cap_rank}</td>

            <td className='d-flex align-items-center gap-3'>
                <img 
                    src={coin.image} 
                    alt={`${coin.name} logo`}
                    style={{width: '30px', height: '30px'}}
                />

                <div>
                    <p>{coin.name}</p>
                    <p>{symbol}</p>
                </div>
            </td>

            <td>{price_format}</td>
            <td>{market_cap_format}</td>
            <td>{supply_format}</td>
            <td>{volume_format}</td>
            {
            change < 0 ?
                (<td className='text-danger'>{change_format}%</td>)
            :
                (<td className='text-success'>{change_format}%</td>)
            }
        </tr>
    )
}

export default Coins_table