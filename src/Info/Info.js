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
            />
            <Losers 
                coins={props.coins}
            />
            <Trending 
                coinsInfo={props.coinsInfo}
            />
        </section>
    )
}

export default Info;