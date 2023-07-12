import {useState} from 'react';
import Navbar from './components/Navbar';
import All_coins from './routes/All_coins';
import Coin from './routes/Coin';
import Footer from './components/Footer';

function App() {
  const [status, set_status] = useState(
    {
      is_loading: false,
      error: null,
    }
  )

  return (
    <>
      <Navbar />
      
        <All_coins 
          status = {status}
          set_status = {set_status}
        />
        
        <Coin 
          status = {status}
          set_status = {set_status}
        />
        
      <Footer />
    </>
  );
}

export default App;