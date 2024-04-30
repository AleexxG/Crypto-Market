import SiteLinks from './SiteLinks';
import Legals from './Legals';
import Socials from './Socials';
import MobileApp from './MobileApp';

function Footer() {

    return (
        <footer>
            <section className="gradient">
                <div className='container py-5 d-flex justify-content-between flex-md-row text-md-start flex-column align-items-md-start align-items-center text-center gap-5'>
                    
                    <SiteLinks />

                    <Legals />

                    <Socials />
                    
                    <MobileApp />

                </div>

                <div className="container text_secondary text-md-start text-center py-3">
                    <p>&copy; {new Date().getFullYear()}
                        CoinPulse. All rights reserved
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;