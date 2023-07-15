import React from 'react'
import { Link } from 'react-router-dom'
import not_found_img from '../assets/not_found.svg';

export default function Not_found() {
    return (
        <div className='container text-center d-flex flex-column justify-content-center align-items-center' 
             style={{height: '100vh'}}>

            <a className='fs-6 text-secondary' href="https://storyset.com/web">Web illustrations by Storyset</a>
            <img src={not_found_img} className='w-75' style={{minWidth: '200px', maxWidth: '500px'}}/>
            
            <h3>Something went wrong</h3>
            <p>Sorry, we couldn't find your page</p>

            <Link to='/'
                  className='mt-4 btn btn-outline-danger'>
                    Back to Homepage
            </Link>

        </div>
    )
}
