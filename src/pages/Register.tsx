import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, ArrowLeft, ArrowRight, User, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useApp } from '@/contexts/AppContext';
import { toast } from 'sonner';

const breakupTypes = [
  { id: 'distancing', label: 'Distanciamiento', description: 'La relación murió lentamente por falta de conexión' },
  { id: 'conflict', label: 'Conflicto', description: 'Peleas constantes llevaron al agotamiento' },
  { id: 'third-party', label: 'Terceros', description: 'Otra persona está involucrada' },
  { id: 'circumstances', label: 'Circunstancias', description: 'Distancia, trabajo, timing' },
];

export default function Register() {
  const navigate = useNavigate();
  const { user, setUser } = useApp();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    breakupType: '',
    objective: '',
  });

  const [step, setStep] = useState(1);

  // Auto-login check - bypass registration if user already exists
  useEffect(() => {
    if (user && user.name && user.email) {
      // User is already logged in, redirect to dashboard
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.name || !formData.email) {
        toast.error('Por favor completa todos los campos');
        return;
      }
      setStep(2);
      return;
    }

    if (!formData.breakupType || !formData.objective) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    // Save user data
    setUser({
      name: formData.name,
      email: formData.email,
      breakupType: formData.breakupType,
      objective: formData.objective,
      startDate: new Date().toISOString(),
      currentDay: 1,
    });

    toast.success('¡Bienvenido a PLAN A! Tu transformación comienza ahora.');
    navigate('/dashboard');
  };

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
        {/* Back to Landing */}
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="glass-card rounded-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl">PLAN A</h1>
            <p className="text-muted-foreground mt-2">
              {step === 1 ? 'Acceso rápido' : 'Cuéntanos sobre ti'}
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-muted/50 border-border"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label>Tipo de ruptura</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {breakupTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, breakupType: type.id })}
                        className={`p-4 rounded-xl text-left transition-all border ${
                          formData.breakupType === type.id
                            ? 'bg-primary/20 border-primary'
                            : 'bg-muted/30 border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-semibold text-sm">{type.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="objective">Tu objetivo principal</Label>
                  <div className="relative">
                    <Heart className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <textarea
                      id="objective"
                      placeholder="¿Qué quieres lograr con este programa?"
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      className="w-full min-h-[100px] pl-10 pr-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex gap-3 mt-8">
              {step === 2 && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Atrás
                </Button>
              )}
              <Button type="submit" className="flex-1">
                {step === 1 ? 'Continuar' : 'Comenzar'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          {step === 1 && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Acceso simplificado para una mejor experiencia.
              <br />
              100% privado, sin servidores.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}