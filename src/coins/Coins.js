import React from "react";
import './Coins.css';
import logo from '../img/btc.png';

export default function Coins() {
    return (
        <main className="main">
            <h3 className="main_title">Crypto prices <span>9999 assets</span> </h3>
            
            <table className="table table-hover table-borderless">
                <thead className="parameters">
                    <tr>
                        <th className="par_name" scope="col">Name</th>
                        <th className="par_price" scope="col">Price</th>
                        <th className="par_change" scope="col">Change</th>
                        <th className="par_mc" scope="col">Market cap</th>
                        <th className="par_volume" scope="col">Volume 24h</th>
                        <th className="par_supply" scope="col">Supply</th>
                    </tr>
                </thead>

                <tbody className="coin_list">
                    <tr className="coin_cont">
                        <th className="coin_text" scope="row">
                            <img alt="Coin Logo" src={logo}></img>
                            <div className="crypto_text">
                                <b className="coin_name">Bitcoin</b>
                                <p className="coin_name_short">BTC</p>
                            </div>
                        </th>
                        <td className="coin_price">$10,000.00</td>
                        <td className="coin_change">3.35%</td>
                        <td className="coin_mc">200.0B</td>
                        <td className="coin_volume">$5.9B</td>
                        <td className="coin_supply">3.2M</td>
                    </tr>
                    <tr className="coin_cont">
                        <th className="coin_text" scope="row">
                            <img alt="Coin Logo" src={logo}></img>
                            <div className="crypto_text">
                                <b className="coin_name">Bitcoin</b>
                                <p className="coin_name_short">BTC</p>
                            </div>
                        </th>
                        <td className="coin_price">$10,000.00</td>
                        <td className="coin_change">3.35%</td>
                        <td className="coin_mc">200.0B</td>
                        <td className="coin_volume">$5.9B</td>
                        <td className="coin_supply">3.2M</td>
                    </tr>
                    <tr className="coin_cont">
                        <th className="coin_text" scope="row">
                            <img alt="Coin Logo" src={logo}></img>
                            <div className="crypto_text">
                                <b className="coin_name">Bitcoin</b>
                                <p className="coin_name_short">BTC</p>
                            </div>
                        </th>
                        <td className="coin_price">$10,000.00</td>
                        <td className="coin_change">3.35%</td>
                        <td className="coin_mc">200.0B</td>
                        <td className="coin_volume">$5.9B</td>
                        <td className="coin_supply">3.2M</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}