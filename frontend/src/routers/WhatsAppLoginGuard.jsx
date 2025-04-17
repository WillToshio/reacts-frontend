
// src/routes/guards/WhatsAppLoginGuard.jsx
import { Navigate } from 'react-router-dom';
import { useWhatsAppAuth } from '@/context/WhatsAppContext';

const WhatsAppLoginGuard = ({ children }) => {
  const { isWhatsAppAuthenticated } = useWhatsAppAuth();

  if (!isWhatsAppAuthenticated) {
    return <Navigate to="/dashboard" />; // ou uma página de login do WhatsApp
  }

  return children;
};

export default WhatsAppLoginGuard;