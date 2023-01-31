import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Chart.css';

function Chart(props) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleClick = () => {
        navigate(`/coins/${search}`, {
            state:{
                id: search, 
                currency: props.currency,
                symbol: props.symbol
            }
        })
    }

    return (
        <main className='p-5'>
            <header className='d-flex mt-5'>
                <div className='coin_name'>
                    <img src={props.coin?.image?.small} alt='Coin'></img>
                    <h1>{props.coin.name} <span>{props.coin.symbol}</span> </h1>
                </div>

                <div className="search_cont">
                    <div className="search_bar">
                    <input 
                        className="search_input" 
                        type="text" 
                        placeholder="Search for an asset"
                        onChange={e => setSearch(e.target.value)}
                    ></input>

                        <button className="search_btn" onClick={handleClick}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </header>
            
            <div>
                Chart Here
            </div>
        </main>
  )
}

export default Chart;