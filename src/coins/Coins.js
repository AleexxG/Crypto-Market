import React, { useState, useEffect } from "react";
import './Coins.css';

export default function Coins() {
    const [coins, setCoins] = useState([]);

    const fetchData = async () => {
        const endpoint = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false");

        const response = await fetch(endpoint);
        return response.json();
    }

    useEffect(() => {
        fetchData()
            .then((res) => {
                setCoins(res)
            })
    }, [])

    const displayCoins = coins.map(coin => {
        return (
            <tr className="coin_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_price">${coin.current_price}</td>
                <td className="coin_change">{coin.price_change_percentage_24h}</td>
                <td className="coin_mc">{coin.market_cap}</td>
                <td className="coin_volume">${coin.volume}</td>
                <td className="coin_supply">{coin.total_supply}</td>
            </tr>
        )
    })

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
                    {displayCoins}
                </tbody>
            </table>
        </main>
    )
}