import React, { useState } from "react";
import './CoinsTable.css';
import Pagination from "./Pagination";

function CoinsTable(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(20);

    const sortCoins = props.coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);

    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    const currentCoins = sortCoins.slice(indexOfFirstCoin, indexOfLastCoin);

    const displayCoinsTable = currentCoins.map(coin => {
        return (
            <tr className="coin_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_price">${(coin.current_price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                {coin.price_change_percentage_24h < 0 ? (
                    <td className="coin_change text-danger">{coin.price_change_percentage_24h.toFixed(2)} %</td>
                    ) : (
                        <td className="coin_change text-success">+{coin.price_change_percentage_24h.toFixed(2)} %</td>
                    )
                }
                <td className="coin_mc">${(coin.market_cap).toLocaleString(undefined)}</td>
                <td className="coin_volume">${(coin.total_volume).toLocaleString(undefined)}</td>
            </tr>
        )
    })

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className="section_table">
            <h3 className="main_title">Crypto prices <span>9999 assets</span> </h3>

            <table className="table table-hover table-borderless mt-3">
                <thead className="parameters">
                    <tr>
                        <th className="par_name" scope="col">Name</th>
                        <th className="par_price" scope="col">Price</th>
                        <th className="par_change" scope="col">Change</th>
                        <th className="par_mc" scope="col">Market cap</th>
                        <th className="par_volume" scope="col">Volume 24h</th>
                    </tr>
                </thead>

                <tbody className="coin_list">
                    {displayCoinsTable}
                </tbody>
            </table>

            <Pagination 
                coinsPerPage={coinsPerPage}
                totalCoins={props.coins.length}
                paginate={paginate}
            />
        </section>
    )
}

export default CoinsTable;