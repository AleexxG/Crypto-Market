import { useState } from 'react';
import Lottie from 'lottie-react';
import cryptoNews from '../assets/crypto_news.json';

function Newsletter() {
    const [emailInput, setEmailInput] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function validation() {
        const input = emailInput.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!input) {
            setError('Enter an e-mail address');
            return false;
        }
        else if (!emailPattern.test(input)) {
            setError('Invalid email address');
            return false;
        }
        else return true;
    }

    function displaySuccessMessage(message) {
        setSuccessMessage(message);

        setTimeout(() => {
            setSuccessMessage('');
        }, 4000);
    }

    function handleEmailSubmit(e) {
        e.preventDefault();

        if (validation()) {
            displaySuccessMessage('Subscribed');
            setEmailInput('');
            setError('');
        }
        else return null
    }

    return (
        <section className='bg-black bg-opacity-25 py-5'>

            {successMessage && (
                <div className='position-fixed top-0 start-50 translate-middle-x bg-success bg-opacity-75 d-flex align-items-center gap-3 px-5 py-3 mt-3 rounded-2'>
                    <i className="fa-solid fa-circle-check"></i>
                    <p className='fw-bold'>{successMessage}</p>
                </div>
            )}

            <div className='container d-flex flex-md-row flex-column justify-content-md-between align-items-center gap-5'>
                <div className='col-md-6 py-sm-5 py-4'>
                    <div>
                        <h2 className='fw-normal'>
                            Stay updated with daily <span className='fw-bold fs-2'>cryptocurrency news.</span>
                        </h2>
                        <p className='col-lg-9 fs-6'>Receive in-depth cryptocurrency analysis, stay informed with the latest news, and ensure you never skip a newsletter by subscribing here!</p>
                    </div>

                    <form className='mt-4' onSubmit={handleEmailSubmit}>
                        <label htmlFor='email' className='form-label mb-1'>Subscribe now</label>
                        <input className={`email_input text-white form-control py-3 color_input
                               ${error ? 'border-1 border-danger' : 'border-0'}`} 
                               placeholder='Enter your e-mail address' 
                               type='text'
                               id='email'
                               value={emailInput}
                               onChange={(e) => setEmailInput(e.target.value)}
                               required>
                        </input>

                        {error && <div className='text-danger'>{error}</div>}

                        <button className='btn btn-danger fw-bold py-3 mt-3 w-100' 
                                style={{minWidth: '130px'}}>
                            Subscribe
                        </button>
                    </form>
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