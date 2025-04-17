import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import '@/assets/styles/privateLayout.css';

const PrivateLayout = () => {
  return (
    <div className="private-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;