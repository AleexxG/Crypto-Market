import React from "react";

export default function Main() {
    return (
        <main>
            <h3>Crypto prices <span>9999 assets</span> </h3>

            <aside>
                <small>Name</small>
                <small>Price</small>
                <small>Change</small>
                <small>Supply</small>
            </aside>

            <ul>
                <li>
                    <b>Bitcoin</b>
                    <small>BTC</small>
                    <p>$10,000.00</p>
                    <p>3.35%</p>
                    <p>200.0B</p>
                </li>
                <li>
                    <b>Ethereum</b>
                    <small>ETH</small>
                    <p>$500.00</p>
                    <p>6.35%</p>
                    <p>300.0B</p>
                </li>
                <li>
                    <b>Tether</b>
                    <small>USDT</small>
                    <p>$1.1</p>
                    <p>2.35%</p>
                    <p>100.0B</p>
                </li>
            </ul>
        </main>
    )
}