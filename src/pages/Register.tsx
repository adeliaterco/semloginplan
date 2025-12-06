// App.tsx - VOLTAR AO ORIGINAL:
<Route path="/" element={<Register />} />

// Register.tsx - REDIRECIONAMENTO INSTANTÂNEO:
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useApp();

  useEffect(() => {
    const defaultUser = {
      name: 'Usuario',
      email: 'usuario@app.com',
      breakupType: 'distancing',
      objective: 'Crecimiento personal',
      startDate: new Date().toISOString(),
      currentDay: 1,
    };

    setUser(defaultUser);
    
    // Redirecionamento IMEDIATO (0ms de delay)
    navigate('/dashboard', { replace: true });
  }, [setUser, navigate]);

  // Não mostra nada (redirecionamento instantâneo)
  return null;
}