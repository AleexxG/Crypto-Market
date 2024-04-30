import googlePlay from '../../assets/google_play.svg';
import appStore from '../../assets/app_store.svg';

function MobileApp() {
    return (
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
    )
}

export default MobileApp;