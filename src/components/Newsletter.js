import Lottie from 'lottie-react';
import cryptoNews from '../assets/crypto_news.json';

function Newsletter() {
    return (
        <section className='bg-black bg-opacity-25 py-5'>
            <div className='container d-flex flex-md-row flex-column align-items-center gap-5'>
                <article>
                    <h3 className='fw-normal'>
                        Stay updated with daily <span className='fw-bold fs-3'>cryptocurrency news.</span>
                    </h3>
                    <p className='col-lg-9'>Receive in-depth cryptocurrency analysis, stay informed with the latest news, and ensure you never skip a newsletter by subscribing here!</p>
                    <button className='btn btn-danger fw-bold px-4 py-2 mt-4 col-md-2 col-12' 
                            style={{minWidth: '130px'}}>
                        Subscribe
                    </button>
                </article>

                <Lottie 
                    animationData={cryptoNews}
                    className='col-md-3 col-sm-6 col-9'
                />

            </div>
        </section>

        
    )
}

export default Newsletter;