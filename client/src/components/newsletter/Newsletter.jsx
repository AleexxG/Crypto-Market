import Lottie from 'lottie-react';
import cryptoNews from '../../assets/crypto_news.json';
import Form from './Form';

function Newsletter() {

    return (
        <section className='bg-black bg-opacity-25 py-5'>
            <div className='container d-flex flex-md-row flex-column justify-content-md-between align-items-center gap-5'>
                <div className='col-md-6 py-sm-5 py-4'>
                    <div>
                        <h2 className='fw-normal'>
                            Stay updated with daily <span className='fw-bold fs-2'>cryptocurrency news.</span>
                        </h2>
                        <p className='col-lg-9 fs-6'>Receive in-depth cryptocurrency analysis, stay informed with the latest news, and ensure you never skip a newsletter by subscribing here!</p>
                    </div>

                    <Form />

                </div>

                <Lottie 
                    animationData={cryptoNews}
                    className='d-md-block d-none'
                />

            </div>
        </section>

        
    )
}

export default Newsletter;