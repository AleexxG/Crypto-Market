import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import All_coins from './routes/All_coins';
import Coin from './routes/Coin';
import Footer from './components/Footer';

function App() {
  const [error, set_error] = useState(null);
  const [is_loading, set_is_loading] = useState(false);

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' 
               element={<All_coins 
                          error = {error}
                          set_error = {set_error} 
                          is_loading = {is_loading}
                          set_is_loading = {set_is_loading} 
                       />} 
        />
        <Route path='/!' 
               element={<All_coins 
                          error = {error}
                          set_error = {set_error} 
                          is_loading = {is_loading}
                          set_is_loading = {set_is_loading} 
                       />} 
        />
        <Route path='/coins/:id' 
               element={<Coin 
                          error = {error}
                          set_error = {set_error} 
                          is_loading = {is_loading}
                          set_is_loading = {set_is_loading} 
                       />} 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;