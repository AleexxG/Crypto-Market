function Exchanges() {

    return (
        <article className='bg-black bg-opacity-25 w-100 rounded-2 px-4 py-3 d-md-block d-none'>
            <h1 className='border-bottom pb-3 fs-5'>⭐ Top Exchanges</h1>
            <ol className='list-unstyled'>
                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p> 
                        <span className='fw-bold me-3'>1.</span> 
                        Binance
                    </p>
                    <a href='https://www.binance.com/'
                       target='_blank'
                       rel="noreferrer" 
                       className='btn btn-outline-light py-1 px-4'>
                        Visit
                    </a>
                </li>

                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p> 
                        <span className='fw-bold me-3'>2.</span> 
                        Coinbase
                    </p>
                    <a href='https://www.coinbase.com/'
                       target='_blank'
                       rel="noreferrer" 
                       className='btn btn-outline-light py-1 px-4'>
                        Visit
                    </a>
                </li>

                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p> 
                        <span className='fw-bold me-3'>3.</span> 
                        Kraken
                    </p>
                    <a href='https://www.kraken.com/'
                       target='_blank'
                       rel="noreferrer" 
                       className='btn btn-outline-light py-1 px-4'>
                        Visit
                    </a>
                </li>
            </ol>
        </article>
        )
}

export default Exchanges;