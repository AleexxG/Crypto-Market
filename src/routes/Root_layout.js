import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

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