import React from "react";
import './Info.css';

export default function Info(props) {
    const [coinsInfo, setCoinsInfo] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const endpoint = new URL("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h")

            const response = await fetch(endpoint);
            const data = await response.json();

            setCoinsInfo(data);
        })();
    }, [])

    const displayCoinsInfo = coinsInfo.map(coin => {
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
                        {displayCoinsInfo}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Biggest Losers <span>24h</span> </h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {displayCoinsInfo}
                    </tbody>
                </table>
            </aside>

            <aside className="losers">
                <h3>Trending</h3>

                <table className="table table-hover table-borderless">
                    <tbody className="coin_info">
                        {displayCoinsInfo}
                    </tbody>
                </table>
            </aside>
        </div>
    )
}