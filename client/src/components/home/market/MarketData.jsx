import { useState, useEffect } from 'react';
import DisplayContent from '../../../helpers/DisplayContent.jsx';
import ColorChange from '../../../helpers/ColorChange';

function MarketData() {
    const textColor = new ColorChange();
    const [marketData, setMarketData] = useState([]);
    const [status, setStatus] = useState({
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                setStatus({ loading: true });

                const apiUrl = import.meta.env.VITE_REACT_APP_COINLORE_API_URL;
                const response = await fetch(`${apiUrl}/global/`);
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setMarketData(data[0]);
                setStatus({ loading: false });
            }
            catch (error) {
                setStatus({ loading: false, error: error });
                setMarketData([]);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <div className='bg-black bg-opacity-25 w-100 rounded-2 px-4 py-3'>
            <h1 className='border-bottom pb-3 fs-5'>📊 Today's Market</h1>

            {DisplayContent(status.loading, status.error,
                <ul className='list-unstyled'>
                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-coins me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Market cap change</p>
                        </div>
                        <p className={textColor.colorChange(marketData.mcap_change)}>
                            {marketData.mcap_change}%
                        </p>
                    </li>

                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-chart-simple me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Volume change</p>
                        </div>
                        <p className={textColor.colorChange(marketData.volume_change)}>
                            {marketData.volume_change}%
                        </p>
                    </li>

                    <li className='mt-4 py-1 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-brands fa-bitcoin me-3" style={{fontSize: '1.05rem'}}></i>
                            <p>Bitcoin dominance</p>
                        </div>
                        <p>{marketData.btc_d}%</p>
                    </li>
                </ul>
            )}
            
        </div>
    )
}

export default MarketData;