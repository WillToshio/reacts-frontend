import { Outlet } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import Footer from '@/components/Footer';

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;