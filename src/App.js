import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom';

import RootLayout from './components/RootLayout';
import Home from './routes/Home';
import Coin from './routes/Coin';
import NotFound from './routes/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='page/:pageNumber' element={<Home />} />
        <Route path='coins/:coinId' element={<Coin />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;