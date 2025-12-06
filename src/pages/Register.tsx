import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

// Receber função do app principal como prop
interface RegisterProps {
  onComplete: () => void;
}

export default function Register({ onComplete }: RegisterProps) {
  
  useEffect(() => {
    // Redirecionamento usando função do app principal
    setTimeout(() => {
      onComplete();
    }, 1000);
  }, [onComplete]);

  // Tela de loading
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
          {/* Logo */}
          <div className="mb-8">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">PLAN A</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Accediendo a tu dashboard...</p>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}