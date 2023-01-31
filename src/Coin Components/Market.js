import React from 'react';
import './Market.css'

function Market(props) {
  return (
    <div>
        <h1 className='title p-5'>Market</h1>

        <section className='market_cont'>
          <h3 className='market_title px-5 mt-5'>Market Stats</h3>

          <div className='market_stats px-5 my-5'>
            <div className='mb-5'>
              <p className='mb-1'>Market Cap</p>
              <b>{props.symbol}{props.coin?.market_data?.market_cap[props.currency]}</b>
            </div>

            <div>
              <p className='mb-1'>Total Volume</p>
              <b>{props.symbol}{props.coin?.market_data?.total_volume[props.currency]}</b>
            </div>

            <div>
              <p className='mb-1'>Circulating Supply</p>
              <b>{props.coin?.market_data?.circulating_supply} {props.coin.symbol}</b>
            </div>

            <div>
              <p className='mb-1'>Popularity</p>
              <b>#{props.coin?.coingecko_rank}</b>
            </div>

            <div>
              <p className='mb-1'>All Time High (24H)</p>
              <b>{props.symbol}{props.coin?.market_data?.high_24h[props.currency]}</b>
            </div>

            <div>
              <p className='mb-1'>All Time Low (24H)</p>
              <b>{props.symbol}{props.coin?.market_data?.low_24h[props.currency]}</b>
            </div>

            <div>
              <p className='mb-1'>Price Change (24H)</p>
              <b>{props.coin?.market_data?.price_change_percentage_24h}%</b>
            </div>

            <div>
              <p className='mb-1'>Price Change (7D)</p>
              <b>{props.coin?.market_data?.price_change_percentage_7d}%</b>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Market