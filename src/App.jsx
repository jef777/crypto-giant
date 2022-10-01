import { useRoutes } from 'react-router-dom';
import HomePage from './pages/index';
import Layout from './templates/layout';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);

  return element;
}
