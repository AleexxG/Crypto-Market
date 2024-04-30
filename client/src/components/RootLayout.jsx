import { Outlet } from 'react-router-dom';
import { CurrencyProvider } from '../contexts/CurrencyContext';
import Navbar from './navbar/Navbar';
import Newsletter from './newsletter/Newsletter';
import Footer from './footer/Footer';

function RootLayout() {
    return (
        <CurrencyProvider>  
            <Navbar />

            <main>
                <Outlet />
                <Newsletter />
            </main>
                
            <Footer />
        </CurrencyProvider>
    )
}

export default RootLayout;