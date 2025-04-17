import Dashboard from '@/pages/private/Dashboard';
import Conta from '@/pages/private/Conta';
import CriarPesquisa from '@/pages/private/CriarPesquisa';
import Conversas from '@/pages/private/Conversas';
import FerramentaPremium from '@/pages/private/FerramentaPremium';
import WhatsAppLoginGuard from './guards/WhatsAppLoginGuard';
import PlanRouteGuard from './guards/PlanRouteGuard';

export const privateRoutes = [
  { path: '/dashboard', element: <Dashboard />, },
  { path: '/conta', element: <Conta />,},
  { path: '/criar-pesquisa',  element: <CriarPesquisa />,},
  { path: '/conversas', element: (
      <WhatsAppLoginGuard>
        <Conversas />
      </WhatsAppLoginGuard>
    ), },
  { path: '/ferramenta-premium',
    element: (
      <PlanRouteGuard allowedPlans={['premium', 'master']}>
        <FerramentaPremium />
      </PlanRouteGuard>
    ),
  },
];