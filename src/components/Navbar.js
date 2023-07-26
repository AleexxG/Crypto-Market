import coinpulseLogo from '../assets/coinpulse_logo.png';

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
                        <h3 className='ms-3 text-white'>CoinPulse</h3>
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
                        <div className='d-flex flex-lg-row flex-column gap-lg-5 gap-3 my-lg-0 my-4'>
                            
                            <div className='col col-lg-3'>
                                <select className="form-select fw-bold text-secondary" 
                                        style={{opacity: '15%'}}>
                                    <option value="usd">USD</option>
                                    <option value="eur">EUR</option>
                                </select>
                            </div>

                            <form className="d-flex" 
                                  role="search">
                                <input className="form-control me-2" 
                                       style={{opacity: '15%'}} 
                                       type="search" 
                                       placeholder="Search..." 
                                       aria-label="Search">
                                </input>
                                <button className="btn btn-outline-danger" 
                                        type="submit">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;