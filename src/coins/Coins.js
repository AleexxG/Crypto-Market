import React from "react";
import './Coins.css';

export default function Coins(props) {

    return (
        <tr className="coin_cont">
            <th className="coin_text" scope="row">
                <img alt="Coin Logo" src={props.image}></img>
                <div className="crypto_text">
                    <b className="coin_name">{props.name}</b>
                    <p className="coin_name_short">{props.symbol}</p>
                </div>
            </th>
            <td className="coin_price">${props.price}</td>
            <td className="coin_change">{props.priceChange}</td>
            <td className="coin_mc">{props.marketCap}</td>
            <td className="coin_volume">${props.volume}</td>
            <td className="coin_supply">{props.supply}</td>
        </tr>
    )
}