import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { toast } from 'sonner';

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useApp();

  // Auto-redirect - bypass entire registration process
  useEffect(() => {
    // Create default user data to maintain system compatibility
    const defaultUser = {
      name: 'Usuario',
      email: 'usuario@app.com',
      breakupType: 'distancing',
      objective: 'Crecimiento personal',
      startDate: new Date().toISOString(),
      currentDay: 1,
    };

    // Set user data and redirect
    setUser(defaultUser);
    
    // Small delay for smooth transition
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  }, [setUser, navigate]);

  // Loading screen while redirecting
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-card rounded-2xl p-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl">PLAN A</h1>
            <p className="text-muted-foreground mt-2">Accediendo a tu dashboard...</p>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}