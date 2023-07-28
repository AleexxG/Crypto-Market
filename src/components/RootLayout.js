import { Outlet } from 'react-router-dom';
import Newsletter from './Newsletter';
import Footer from './Footer';

function RootLayout() {
    return (
        <>  
            <main>
                <Outlet />
                <Newsletter />
            </main>
                
            <Footer />
        </>
    )
}

export default RootLayout;