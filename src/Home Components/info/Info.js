import React from "react";
import './Info.css';
import Gainers from './compInfo/Gainers';
import Losers from './compInfo/Losers';
import Trending from './compInfo/Trending';

function Info(props) {

    return(
        <section className="section_info">
            <Gainers 
                coins={props.coins}
                currency={props.currency}
                symbol={props.symbol}
            />
            <Losers 
                coins={props.coins}
                currency={props.currency}
                symbol={props.symbol}
            />
            <Trending 
                coinsInfo={props.coinsInfo}
                currency={props.currency}
                symbol={props.symbol}
            />
        </section>
    )
}

export default Info;