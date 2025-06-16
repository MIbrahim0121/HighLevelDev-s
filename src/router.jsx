import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AbtGys from './Components/AbtGys';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/aboutMe',
    element: <AbtGys />,
  },
  {
    path: '*',
    element: <div className="text-center mt-20 text-red-600 text-xl">404 - Page Not Found</div>,
  }
]);
