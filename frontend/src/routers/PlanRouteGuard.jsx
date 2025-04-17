// src/routes/guards/PlanRouteGuard.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const PlanRouteGuard = ({ allowedPlans, children }) => {
  const { user } = useAuth();

  if (!user || !allowedPlans.includes(user.planType)) {
    return <Navigate to="/upgrade" />;
  }

  return children;
};

export default PlanRouteGuard;