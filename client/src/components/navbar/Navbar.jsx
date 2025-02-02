import coinpulseLogo from '../../assets/coinpulse_logo.png';
import CurrencySelect from '../currency_selector/CurrencySelect';
import SearchBar from './SearchBar';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" 
                       href='/'>
                        <img src={coinpulseLogo} 
                             alt='CoinPulse logo'   
                             style={{width: '15%'}}>
                        </img>
                        <p className='ms-3 text-white fs-3 fw-bold'>CoinPulse</p>
                    </a>

                    <button className="navbar-toggler p-0 border-0 shadow-none" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars fs-2 text-white"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse d-lg-flex justify-content-end" 
                         id="navbarSupportedContent">
                        <div className='d-flex flex-lg-row flex-column col-lg-8 gap-lg-5 gap-3 my-lg-0 my-4'>
                            
                            <CurrencySelect />

                            <SearchBar />

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;