import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom';

import { useState } from 'react';
import RootLayout from './components/RootLayout';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Coin from './routes/Coin';
import NotFound from './routes/NotFound';

function App() {
  const [currency, setCurrency] = useState('php');
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home currency = {currency} />} />
          <Route path='page/:pageNumber' element={<Home currency = {currency} />} />
          <Route path='coins/:coinId' element={<Coin currency = {currency} />} />
        </Route>
  
        <Route path='*' element={<NotFound />} />
      </>
  ));

  return (
    <>
      <Navbar 
        currency = {currency}
        setCurrency = {setCurrency}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;