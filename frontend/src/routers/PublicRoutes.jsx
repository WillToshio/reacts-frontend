import Login from '@/pages/Login';
import LandingPage from '@/pages/public/LandingPage';
import Register from '@/pages/Register';

export const PublicRoutes = [
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
];