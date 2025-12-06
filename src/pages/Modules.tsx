import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { modules } from '@/data/modules';

export default function Modules() {
  const navigate = useNavigate();
  const { isLoggedIn, moduleProgress } = useApp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const getModuleStatus = (moduleId: number): 'completed' | 'available' => {
    const progress = moduleProgress.find(m => m.moduleId === moduleId);
    if (progress?.completed) return 'completed';
    return 'available';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-2">
            Los 16 <span className="gradient-text">Módulos</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Tu camino completo hacia la reconquista. Todos los módulos son 100% gratuitos.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Tu Progreso</h3>
              <p className="text-muted-foreground">
                {moduleProgress.filter(m => m.completed).length} de 16 módulos completados
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(moduleProgress.filter(m => m.completed).length / 16) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const status = getModuleStatus(module.id);
            const isCompleted = status === 'completed';

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="module-card group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      isCompleted
                        ? 'bg-success text-success-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {isCompleted ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Completado
                        </span>
                      ) : (
                        `Módulo ${module.id}`
                      )}
                    </span>
                  </div>

                  {/* Module Number */}
                  <div className="absolute top-3 right-3">
                    <span className="font-display text-4xl text-foreground/20">
                      {String(module.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2 mb-2 min-h-[48px]">
                    {module.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </span>
                  </div>

                  <Link to={`/module/${module.id}`}>
                    <Button
                      variant={isCompleted ? 'outline' : 'default'}
                      className="w-full"
                    >
                      {isCompleted ? 'Revisar' : 'Comenzar'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
