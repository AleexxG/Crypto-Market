import googlePlay from '../assets/google_play.svg';
import appStore from '../assets/app_store.svg';

function Footer() {
    return (
        <footer>
            <section className="gradient">
                <div className='container py-5 d-flex justify-content-between flex-md-row text-md-start flex-column align-items-md-start align-items-center text-center gap-5'>
                    
                    <div>
                        <h3 className='fs-5 fw-bold mb-4'>COINPULSE</h3>
                        <ul className='mb-md-5 m-0 p-0 list-unstyled d-flex flex-column gap-2'>
                            <li className='pointer'>Methodology</li>
                            <li className='pointer'>Support</li>
                            <li className='pointer'>API</li>
                            <li className='pointer'>Rate</li>
                            <li className='pointer'>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='fw-bold fs-5 mb-4'>LEGALS</h3>
                        <ul className='mb-md-5 m-0 p-0 list-unstyled d-flex flex-column gap-2'>
                            <li className='pointer'>Terms of Service</li>
                            <li className='pointer'>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='fw-bold fs-5 mb-4'>SOCIALS</h3>
                        <ul className='mb-md-5 m-0 p-0 d-flex flex-column gap-2'>
                            <li className="mb-2">
                                <a className="text-white"
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="text-white"
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noreferrer">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className='fw-bold fs-5 mb-4'>COINPULSE APP AVAILABLE ON</h3>
                        <ul className='mb-md-0 mb-5 m-0 p-0 d-flex flex-column gap-2' 
                            style={{ maxWidth: '314px' }}>
                            <li>
                                <a target='_blank'
                                rel="noreferrer" 
                                href='https://play.google.com/store/games?device=windows&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <img className='w-25' 
                                        style={{minWidth: '150px'}} 
                                        alt='Get it on Google Play' 
                                        src={googlePlay}
                                    />
                                </a>
                            </li>
                            <li>
                                <a target='_blank'
                                rel="noreferrer" 
                                href="https://www.apple.com/app-store/">
                                    <img className='w-25' 
                                        style={{minWidth: '150px'}} 
                                        alt="Download on the App Store" 
                                        src={appStore}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
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