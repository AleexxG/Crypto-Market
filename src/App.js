import React from 'react';

import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom';

import Root_layout from './components/Root_layout';
import Home from './routes/Home';
import Coin from './routes/Coin';
import Not_found from './routes/Not_found';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root_layout />}>
        <Route index element={<Home />} />
        <Route path='page/:page_number' element={<Home />} />
        <Route path='coins/:coin_id' element={<Coin />} />
      </Route>

      <Route path='*' element={<Not_found />} />
    </>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;