import React from 'react';

import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom';

import Root_layout from './routes/Root_layout';
import All_coins from './routes/All_coins';
import Coin from './routes/Coin';
import Not_found from './routes/Not_found';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root_layout />}>
        <Route index element={<All_coins />} />
        <Route path='page/:page' element={<All_coins />} />
        <Route path='coin' element={<Coin />} />
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