import React from "react";
import './Info.css';
import logo from '../img/btc.png';

export default function Info() {
    return(
        <div className="info">
            <aside className="gainers">
                <h3>Biggest Gainers <span>24h</span> </h3>
                
                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        <tr className="coin_info_cont">
                            <th className="coin_text" scope="row">
                                <img alt="Coin Logo" src={logo}></img>
                                <div className="crypto_text">
                                    <b className="coin_name">Bitcoin</b>
                                    <p className="coin_name_short">BTC</p>
                                </div>
                            </th>
                            <td className="coin_info_num">
                                <p className="coin_price">$10,000.00</p>
                                <p className="coin_change">3.35%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Biggest Losers <span>24h</span> </h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        <tr className="coin_info_cont">
                            <th className="coin_text" scope="row">
                                <img alt="Coin Logo" src={logo}></img>
                                <div className="crypto_text">
                                    <b className="coin_name">Bitcoin</b>
                                    <p className="coin_name_short">BTC</p>
                                </div>
                            </th>
                            <td className="coin_info_num">
                                <p className="coin_price">$10,000.00</p>
                                <p className="coin_change">3.35%</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </aside>
        </div>
    )
}