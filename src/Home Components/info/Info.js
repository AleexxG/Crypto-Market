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