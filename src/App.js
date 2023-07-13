import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root_layout from './routes/Root_layout';
import All_coins from './routes/All_coins';
import Coin from './routes/Coin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root_layout />,
    children: [
      {
        path: '',
        element: <All_coins />,
      },

      {
        path: 'coin',
        element: <Coin />,
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;