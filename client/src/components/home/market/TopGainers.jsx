import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DisplayContent from '../../../helpers/DisplayContent.jsx';
import ColorChange from '../../../helpers/ColorChange.js';

function TopGainers() {
    const [topGainers, setTopGainers] = useState([]);
    const [status, setStatus] = useState({loading: false, error: null,});
    const textColor = new ColorChange();

    useEffect(() => {
        const fetchTopGainers = async () => {
            try {
                setStatus({ loading: true });

                const response = await fetch(
                    'http://127.0.0.1:8000/api/coins/top-gainers'
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await response.json();
                setTopGainers(data);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setTopGainers([]);
            }
        };

        fetchTopGainers();
    }, []);

    return (
        <article className='bg-black bg-opacity-25 w-100 rounded-2 py-3'>
            <div className='px-4'>
                <h1 className='border-bottom pb-3 fs-5'>🚀 Top Gainers</h1>
            </div>
            
            {DisplayContent(status.loading, status.error,
                <ol className='list-unstyled'>

                    {topGainers.map(coin => (
                        <Link to={`/coins/${coin.slug}`} key={coin.slug}>
                            <li className='link_on_card py-3 px-4 d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <img src={coin.image} alt={`${coin.name} logo`} style={{maxWidth: '20px'}}></img>
                                    <p className='ms-3 fw-bold'>
                                        {coin.name} 
                                        <span className="ms-3 fw-normal">{coin.symbol.toUpperCase()}</span>
                                    </p>
                                </div>
                                <p className={textColor.colorChange(Number(coin.price_change_percentage_7d).toFixed(2))}>
                                    {Number(coin.price_change_percentage_7d).toFixed(2)}%
                                </p>
                            </li>
                        </Link>
                    ))}

                </ol>
            )}
        </article>
    )
}

export default TopGainers;