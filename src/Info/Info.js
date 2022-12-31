import React from "react";
import './Info.css';

export default function Info(props) {

    return(
        <tr className="coin_info_cont">
            <th className="coin_text" scope="row">
                <img alt="Coin Logo" src={props.image}></img>
                <div className="crypto_text">
                    <b className="coin_name">{props.name}</b>
                    <p className="coin_name_short">{props.symbol}</p>
                </div>
            </th>
            <td className="coin_info_num">
                <p className="coin_price">${props.price}</p>
                <p className="coin_change">{props.priceChange}</p>
            </td>
        </tr>
    )
}