import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';

import LandingPage from '@/pages/public/LandingPage';
import Login from '@/pages/public/Login';

import Dashboard from '@/pages/private/Dashboard';
import Conta from '@/pages/private/Conta';
import CriarPesquisa from '@/pages/private/CriarPesquisa';
import Conversas from '@/pages/private/Conversas';
import FerramentaPremium from '@/pages/private/FerramentaPremium';
import WhatsAppLoginGuard from './guards/WhatsAppLoginGuard';
import PlanRouteGuard from './guards/PlanRouteGuard';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Rotas privadas */}
      {isAuthenticated && (
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/criar-pesquisa" element={<CriarPesquisa />} />
          <Route
            path="/conversas"
            element={
              <WhatsAppLoginGuard>
                <Conversas />
              </WhatsAppLoginGuard>
            }
          />
          <Route
            path="/ferramenta-premium"
            element={
              <PlanRouteGuard allowedPlans={["premium", "master"]}>
                <FerramentaPremium />
              </PlanRouteGuard>
            }
          />
        </Route>
      )}

      {/* Redirecionamento padrão */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
};
