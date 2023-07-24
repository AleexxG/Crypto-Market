import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

function RootLayout() {
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

export default RootLayout;