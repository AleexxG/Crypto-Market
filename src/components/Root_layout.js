import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

function Root_layout() {
    return (
        <>
            <Navbar />
            
            <main>
                <Outlet />
                <Newsletter />
            </main>
                
            <Footer />
        </>
    )
}

export default Root_layout