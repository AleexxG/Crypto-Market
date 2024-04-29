import { useEffect, useState } from 'react';
import MarketData from './market/MarketData';
import TopGainers from './market/TopGainers';
import FollowUs from './market/TopLosers';

function Market() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => setIsSmallScreen(window.innerWidth > 992));
        return () => {
            window.removeEventListener('resize', () => setIsSmallScreen(window.innerWidth > 992));
        };
    }, []);

    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                {isSmallScreen && <MarketData />}

                <TopGainers />
                
                <FollowUs />

            </div>
        </section>
    )
}

export default Market;