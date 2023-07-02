import React from 'react'

function Coins_table(props) {
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
                    <p style={{fontSize: '0.9rem'}}>{props.coin.symbol}</p>
                </div>
            </td>

            <td>{props.coin.current_price}</td>
            <td>{props.coin.market_cap}</td>
            <td>{props.coin.total_volume}</td>
            <td>{props.coin.price_change_percentage_24h}%</td>
        </tr>
    )
}

export default Coins_table