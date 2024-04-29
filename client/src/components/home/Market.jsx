import MarketData from './market/MarketData';
import Exchanges from './market/Exchanges';
import FollowUs from './market/FollowUs';

function Market() {

    return (
        <section className='gradient pt-md-4 pt-3 pb-5'>
            <div className='container py-4 d-flex flex-md-row flex-column justify-content-between gap-3'>
                
                <MarketData />

                <Exchanges />
                
                <FollowUs />

            </div>
        </section>
    )
}

export default Market;