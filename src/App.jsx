import { useRoutes } from 'react-router-dom';
import Layout from './templates/layout';
import HomePage from './pages/index';
import CryptoDetails from './pages/CryptoDetails';
import Cryptocurrencies from './pages/Cyptocurencies';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/cryptocurrency/:coinId', element: <CryptoDetails /> },
        { path: '/cryptocurrencies', element: <Cryptocurrencies /> },
      ],
    },
  ]);

  return element;
}
