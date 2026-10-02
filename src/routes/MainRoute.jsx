import PublicRoutes from './PublicRoutes'
import { useRoutes } from 'react-router-dom';

const MainRoute = () => {
  const route = [...PublicRoutes];
  const elememt = useRoutes(route);
  return elememt; 
}

export default MainRoute;
