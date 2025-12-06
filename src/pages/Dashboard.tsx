import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Flame, Trophy, BookOpen, ArrowRight, CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProgressRing } from '@/components/ProgressRing';
import { useApp } from '@/contexts/AppContext';
import { modules } from '@/data/modules';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, isLoggedIn, dayProgress, moduleProgress, streak, totalPoints, updateDayProgress } = useApp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!user) return null;

  // Calculate current day based on start date
  const startDate = new Date(user.startDate);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const currentDay = Math.min(Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1, 21);
  
  // Calculate progress
  const completedDays = dayProgress.filter(d => d.completed).length;
  const progressPercent = Math.round((completedDays / 21) * 100);
  const completedModules = moduleProgress.filter(m => m.completed).length;

  // Get current module
  const currentModuleId = Math.min(Math.ceil(currentDay / 1.5), 16);
  const currentModule = modules.find(m => m.id === currentModuleId) || modules[0];

  // Get today's tasks
  const todayProgress = dayProgress.find(d => d.day === currentDay);
  const tasks = todayProgress?.tasks || [];

  const handleTaskToggle = (taskId: string) => {
    if (!todayProgress) return;
    
    const updatedTasks = tasks.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    
    const allCompleted = updatedTasks.every(t => t.completed);
    updateDayProgress(currentDay, { 
      tasks: updatedTasks,
      completed: allCompleted,
      date: new Date().toISOString()
    });
  };

  const stats = [
    { icon: Calendar, label: 'Día Actual', value: currentDay, suffix: '/ 21' },
    { icon: BookOpen, label: 'Módulos', value: completedModules, suffix: '/ 16' },
    { icon: Trophy, label: 'Puntos', value: totalPoints, suffix: '' },
    { icon: Flame, label: 'Racha', value: streak, suffix: 'días' },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-2">
            Hola, <span className="gradient-text">{user.name}</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Día {currentDay} de 21 - Tu transformación está en progreso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Progress Ring */}
                <ProgressRing progress={progressPercent} size={160} strokeWidth={12}>
                  <div className="text-center">
                    <div className="font-display text-4xl text-primary">{progressPercent}%</div>
                    <div className="text-xs text-muted-foreground">Completado</div>
                  </div>
                </ProgressRing>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 flex-1 w-full">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="stat-card"
                    >
                      <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="font-display text-2xl text-foreground">
                        {stat.value}
                        <span className="text-sm text-muted-foreground ml-1">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Current Module */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="module-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={currentModule.image}
                  alt={currentModule.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Módulo {currentModule.id}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{currentModule.title}</h3>
                <p className="text-muted-foreground mb-4">{currentModule.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    ⏱️ {currentModule.duration}
                  </span>
                  <Link to={`/module/${currentModule.id}`}>
                    <Button>
                      Comenzar Módulo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Checklist */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Tareas de Hoy
              </h3>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => handleTaskToggle(task.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                      task.completed
                        ? 'bg-success/20 text-success'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    {task.completed ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <span className={`text-sm text-left ${task.completed ? 'line-through' : ''}`}>
                      {task.text}
                    </span>
                  </button>
                ))}
              </div>
              
              {tasks.every(t => t.completed) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 p-3 bg-success/20 rounded-lg text-center"
                >
                  <span className="text-success font-semibold">🎉 ¡Día completado!</span>
                </motion.div>
              )}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                <Link to="/tracker" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Ver Tracker de 21 Días
                  </Button>
                </Link>
                <Link to="/tools/journaling" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Escribir en el Diario
                  </Button>
                </Link>
                <Link to="/modules" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Todos los Módulos
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Motivational Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="quote-box"
            >
              <p className="text-foreground mb-2">
                "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
              </p>
              <p className="text-sm text-primary">— Proverbio Chino</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
