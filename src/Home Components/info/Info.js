import React from "react";
import './Info.css';
import Gainers from './com ing/Gainers';
import Losers from './com ing/Losers';
import Trending from './com ing/Trending';

function Info(props) {

    return(
        <section className="section_info">
            <Gainers 
                coins={props.coins}
                symbol={props.symbol}
            />
            <Losers 
                coins={props.coins}
                symbol={props.symbol}
            />
            <Trending 
                coinsInfo={props.coinsInfo}
                symbol={props.symbol}
            />
        </section>
    )
}

export default Info;