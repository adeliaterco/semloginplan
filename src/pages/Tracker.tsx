import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Flame, Trophy, CheckCircle, Circle, TrendingUp } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProgressRing } from '@/components/ProgressRing';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

export default function Tracker() {
  const navigate = useNavigate();
  const { isLoggedIn, user, dayProgress, streak, updateDayProgress } = useApp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!user) return null;

  // Calculate current day
  const startDate = new Date(user.startDate);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const currentDay = Math.min(Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1, 21);

  const completedDays = dayProgress.filter(d => d.completed).length;
  const progressPercent = Math.round((completedDays / 21) * 100);

  // Calculate week data
  const weeks = [
    { name: 'Semana 1: Estabilización', days: dayProgress.slice(0, 7) },
    { name: 'Semana 2: Transformación', days: dayProgress.slice(7, 14) },
    { name: 'Semana 3: Reconexión', days: dayProgress.slice(14, 21) },
  ];

  const getDayStatus = (day: number) => {
    const dayData = dayProgress.find(d => d.day === day);
    if (day === currentDay) return 'current';
    if (dayData?.completed) return 'completed';
    if (day < currentDay) return 'missed';
    return 'pending';
  };

  const handleDayToggle = (day: number) => {
    if (day > currentDay) return; // Can't mark future days
    
    const dayData = dayProgress.find(d => d.day === day);
    if (dayData) {
      updateDayProgress(day, {
        completed: !dayData.completed,
        date: new Date().toISOString()
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-2">
            Tracker de <span className="gradient-text">21 Días</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Visualiza y registra tu progreso diario en el programa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Calendar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="stat-card">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl">{completedDays}</div>
                <div className="text-xs text-muted-foreground">Días Completados</div>
              </div>
              <div className="stat-card">
                <Flame className="h-6 w-6 text-warning mx-auto mb-2" />
                <div className="font-display text-2xl">{streak}</div>
                <div className="text-xs text-muted-foreground">Racha Actual</div>
              </div>
              <div className="stat-card">
                <TrendingUp className="h-6 w-6 text-success mx-auto mb-2" />
                <div className="font-display text-2xl">{progressPercent}%</div>
                <div className="text-xs text-muted-foreground">Progreso Total</div>
              </div>
            </motion.div>

            {/* Calendar Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="font-display text-xl mb-6">Calendario de Progreso</h2>
              
              <div className="grid grid-cols-7 gap-3 mb-4">
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day) => (
                  <div key={day} className="text-center text-sm text-muted-foreground font-medium">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-3">
                {dayProgress.map((day) => {
                  const status = getDayStatus(day.day);
                  return (
                    <motion.button
                      key={day.day}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDayToggle(day.day)}
                      disabled={day.day > currentDay}
                      className={cn(
                        'tracker-day',
                        status === 'completed' && 'tracker-day-completed',
                        status === 'current' && 'tracker-day-current',
                        status === 'missed' && 'bg-destructive/30 text-destructive',
                        status === 'pending' && 'tracker-day-pending',
                        day.day > currentDay && 'cursor-not-allowed'
                      )}
                    >
                      {status === 'completed' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        day.day
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="tracker-day tracker-day-completed w-6 h-6 text-xs">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">Completado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="tracker-day tracker-day-current w-6 h-6 text-xs">!</div>
                  <span className="text-muted-foreground">Hoy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="tracker-day bg-destructive/30 text-destructive w-6 h-6 text-xs">X</div>
                  <span className="text-muted-foreground">No completado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="tracker-day tracker-day-pending w-6 h-6 text-xs">-</div>
                  <span className="text-muted-foreground">Pendiente</span>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h2 className="font-display text-xl mb-6">Línea de Tiempo</h2>

              <div className="space-y-6">
                {weeks.map((week, weekIndex) => {
                  const weekCompleted = week.days.filter(d => d.completed).length;
                  const isCurrentWeek = currentDay >= weekIndex * 7 + 1 && currentDay <= (weekIndex + 1) * 7;
                  
                  return (
                    <div key={week.name} className={cn(
                      "relative pl-8 pb-6 border-l-2",
                      isCurrentWeek ? "border-primary" : weekCompleted === 7 ? "border-success" : "border-muted"
                    )}>
                      <div className={cn(
                        "absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center",
                        weekCompleted === 7 
                          ? "bg-success text-success-foreground" 
                          : isCurrentWeek 
                          ? "bg-primary text-primary-foreground animate-pulse-glow"
                          : "bg-muted text-muted-foreground"
                      )}>
                        {weekCompleted === 7 ? <CheckCircle className="h-4 w-4" /> : weekIndex + 1}
                      </div>
                      
                      <div className="mb-2">
                        <h3 className="font-semibold text-foreground">{week.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {weekCompleted}/7 días completados
                        </p>
                      </div>

                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(weekCompleted / 7) * 100}%` }}
                          className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Ring */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <ProgressRing progress={progressPercent} size={180} strokeWidth={16}>
                <div className="text-center">
                  <div className="font-display text-4xl text-primary">{completedDays}</div>
                  <div className="text-sm text-muted-foreground">de 21 días</div>
                </div>
              </ProgressRing>

              <div className="mt-6">
                <p className="text-foreground font-semibold">
                  {progressPercent >= 100 
                    ? '🎉 ¡Programa Completado!'
                    : `${21 - completedDays} días restantes`
                  }
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {progressPercent < 33 
                    ? 'Apenas comenzando. ¡Sigue adelante!'
                    : progressPercent < 66
                    ? 'Buen progreso. ¡No te detengas!'
                    : progressPercent < 100
                    ? '¡Casi llegas! La meta está cerca.'
                    : '¡Lo lograste! Eres un campeón.'}
                </p>
              </div>
            </motion.div>

            {/* Today's Tasks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Día {currentDay}
              </h3>

              <div className="space-y-3">
                {dayProgress.find(d => d.day === currentDay)?.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg",
                      task.completed ? "bg-success/20" : "bg-muted/30"
                    )}
                  >
                    {task.completed ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                    <span className={cn("text-sm", task.completed && "line-through text-muted-foreground")}>
                      {task.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Logros
              </h3>

              <div className="space-y-3">
                {[
                  { name: 'Primera Semana', achieved: completedDays >= 7 },
                  { name: 'Segunda Semana', achieved: completedDays >= 14 },
                  { name: 'Programa Completo', achieved: completedDays >= 21 },
                  { name: 'Racha de 7 días', achieved: streak >= 7 },
                  { name: 'Perfeccionista', achieved: completedDays === currentDay && currentDay >= 7 },
                ].map((achievement) => (
                  <div
                    key={achievement.name}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg",
                      achievement.achieved ? "bg-warning/20" : "bg-muted/30"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      achievement.achieved ? "bg-warning text-warning-foreground" : "bg-muted"
                    )}>
                      {achievement.achieved ? <Trophy className="h-4 w-4" /> : '🔒'}
                    </div>
                    <span className={cn("text-sm", !achievement.achieved && "text-muted-foreground")}>
                      {achievement.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
