import React from 'react'
import google_play from '../assets/google_play.svg';
import app_store from '../assets/app_store.svg';

function Footer() {
    return (
        <footer>
            <section className="gradient">
                <div className='container py-5 d-flex justify-content-between flex-md-row text-md-start flex-column align-items-md-start align-items-center text-center gap-5'>
                    
                    <ul className='mb-md-5 m-0 p-0 list-unstyled d-flex flex-column gap-2'>
                        <li className='mb-md-4 mb-3 fw-bold'>
                            <h5 className='fw-bold'>COINPULSE</h5>
                        </li>
                        <li className='pointer'>Methodology</li>
                        <li className='pointer'>Support</li>
                        <li className='pointer'>API</li>
                        <li className='pointer'>Rate</li>
                        <li className='pointer'>Careers</li>
                    </ul>

                    <ul className='mb-md-5 m-0 p-0 list-unstyled d-flex flex-column gap-2'>
                        <li className='mb-md-4 mb-3 fw-bold'>
                            <h5 className='fw-bold'>LEGALS</h5>
                        </li>
                        <li className='pointer'>Terms of Service</li>
                        <li className='pointer'>Privacy Policy</li>
                    </ul>

                    <ul className='mb-md-5 m-0 p-0 d-flex flex-column gap-2'>
                        <li className='mb-md-4 mb-3 fw-bold'>
                            <h5 className='fw-bold'>SOCIALS</h5>
                        </li>
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
                    
                    <ul className='mb-md-0 mb-5 m-0 p-0 d-flex flex-column gap-2' 
                        style={{ maxWidth: '314px' }}>
                        <li className='mb-md-4 mb-3 fw-bold'>
                            <h5 className='fw-bold'>COINPULSE APP AVAILABLE ON</h5>
                        </li>
                        <li>
                            <a target='_blank'
                               rel="noreferrer" 
                               href='https://play.google.com/store/games?device=windows&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img className='w-25' 
                                     style={{minWidth: '150px'}} 
                                     alt='Get it on Google Play' 
                                     src={google_play}
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
                                     src={app_store}
                                />
                            </a>
                        </li>
                    </ul>
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

export default Footer