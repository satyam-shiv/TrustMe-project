import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './features/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: null,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

export default router;
