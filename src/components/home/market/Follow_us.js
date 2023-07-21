import React from 'react'

function Follow_us() {
    return (
        <article className='color_bg w-100 rounded-2 px-4 py-3 d-lg-block d-none'>
            <h5 className='border-bottom pb-3'>📢 Follow Us</h5>
            <ul className='list-unstyled'>
                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p>
                        <i className="fa-brands fa-x-twitter me-3"></i>
                        Twitter 
                    </p>
                    <a href='https://www.twitter.com/'
                       target='_blank' 
                       className='btn btn-outline-light py-1 px-4'>
                        + Follow
                    </a>
                </li>

                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p>
                        <i className="fa-brands fa-square-facebook me-3"></i>
                        Facebook 
                    </p>
                    <a href='https://www.facebook.com/'
                       target='_blank' 
                       className='btn btn-outline-light py-1 px-4'>
                        + Follow
                    </a>
                </li>

                <li className='mt-4 d-flex justify-content-between align-items-center'>
                    <p>
                    <i className="fa-brands fa-instagram me-3"></i>
                        Instagram 
                    </p>
                    <a href='https://www.instagram.com/'
                       target='_blank' 
                       className='btn btn-outline-light py-1 px-4'>
                        + Follow
                    </a>
                </li>
            </ul>
        </article>
    )
}

export default Follow_us