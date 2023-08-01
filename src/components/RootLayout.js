import { Outlet } from 'react-router-dom';
import { CurrencyProvider } from './currency/CurrencyContext';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';

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