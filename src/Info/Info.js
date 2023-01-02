import React, { useState, useEffect } from "react";
import './Info.css';

export default function Info() {
    const [coins, setCoins] = useState([]);
    const [coinsInfo, setCoinsInfo] = React.useState([]);

    useEffect(() => {
        (async () => {
            const allCoins = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const trendingCoins = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h");

            const response = await Promise.all([fetch(allCoins), fetch(trendingCoins)]);

            const data1 = await response[0].json();
            const data2 = await response[1].json();

            setCoins(data1);
            setCoinsInfo(data2);
        })();
    }, [])

    const trendingCoins = coinsInfo.map(coin => {
        return (
            <tr className="coin_info_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_info_num">
                    <p className="coin_price">${coin.current_price}</p>
                    <p className="coin_change">{coin.price_change_percentage_24h}</p>
                </td>
            </tr>
        )
    })

    coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    const gainers = coins.slice(0, 5);
    const topGainers = gainers.map(coin => {
        return (
            <tr className="coin_info_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_info_num">
                    <p className="coin_price">${coin.current_price}</p>
                    <p className="coin_change">{coin.price_change_percentage_24h}</p>
                </td>
            </tr>
        )
    })

    coins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
    const losers = coins.slice(0, 5);
    const topLosers = losers.map(coin => {
        return (
            <tr className="coin_info_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_info_num">
                    <p className="coin_price">${coin.current_price}</p>
                    <p className="coin_change">{coin.price_change_percentage_24h}</p>
                </td>
            </tr>
        )
    })

    return(
        <div className="info">
            <aside className="gainers">
                <h3>Biggest Gainers <span>24h</span> </h3>
                
                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {topGainers}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Biggest Losers <span>24h</span> </h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {topLosers}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Trending</h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {trendingCoins}
                    </tbody>
                </table>
            </aside>
        </div>
    )
}