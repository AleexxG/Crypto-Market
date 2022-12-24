import React from "react";

export default function Aside() {
    return(
        <div>
            <aside>
                <h3>Biggest Gainers <span>24h</span> </h3>

                <ul>
                    <li>
                        <b>Ethereum</b>
                        <small>ETH</small>
                        <p>$500.00</p>
                        <p>2.35%</p>
                    </li>
                    <li>
                        <b>Dai</b>
                        <small>DAI</small>
                        <p>$100.00</p>
                        <p>5.35%</p>
                    </li>
                    <li>
                        <b>LCX</b>
                        <small>LCX</small>
                        <p>$10.00</p>
                        <p>7.35%</p>
                    </li>
                </ul>
            </aside>

            <aside>
                <h3>Biggest Losers <span>24h</span> </h3>

                <ul>
                    <li>
                        <b>Solana</b>
                        <small>SOL</small>
                        <p>$40.00</p>
                        <p>1.35%</p>
                    </li>
                    <li>
                        <b>BNB</b>
                        <small>BNB</small>
                        <p>$450.00</p>
                        <p>3.55%</p>
                    </li>
                    <li>
                        <b>Cardano</b>
                        <small>ADA</small>
                        <p>$31.00</p>
                        <p>5.91%</p>
                    </li>
                </ul>
            </aside>
        </div>
    )
}