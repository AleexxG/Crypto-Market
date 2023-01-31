import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search(props) {
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
        <header className="header_cont">
            <div className="search_cont">
                <h1>Explore the cryptoeconomy</h1>
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
    )
}

export default Search;