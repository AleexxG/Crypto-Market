import React from "react";
import './Search.css';

export default function Search() {
    return (
        <header className="header_cont">
            <div className="search_cont">
                <h1>Explore the cryptoeconomy</h1>
                <div className="search_bar">
                    <input className="search_input" type="text" placeholder="Search for an asset"></input>
                    <button className="search_btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}