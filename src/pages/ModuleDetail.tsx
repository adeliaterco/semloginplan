import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle, XCircle, Clock, 
  BookOpen, ListChecks, Quote, Brain, Dumbbell 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useApp } from '@/contexts/AppContext';
import { modules } from '@/data/modules';
import { toast } from 'sonner';

export default function ModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, moduleProgress, updateModuleProgress, addPoints } = useApp();
  
  const moduleId = parseInt(id || '1');
  const module = modules.find(m => m.id === moduleId);
  const progress = moduleProgress.find(m => m.moduleId === moduleId);

  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [exerciseCompleted, setExerciseCompleted] = useState(progress?.exerciseCompleted || false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!module) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl">Módulo no encontrado</h1>
          <Link to="/modules">
            <Button className="mt-4">Volver a Módulos</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleQuizSubmit = () => {
    if (quizAnswers.length !== module.quiz.length) {
      toast.error('Por favor responde todas las preguntas');
      return;
    }

    setQuizSubmitted(true);
    const correctCount = module.quiz.reduce((acc, q, i) => 
      acc + (quizAnswers[i] === q.correctIndex ? 1 : 0), 0
    );
    
    const score = Math.round((correctCount / module.quiz.length) * 100);
    updateModuleProgress(moduleId, { quizScore: score });
    addPoints(correctCount * 10);

    if (score >= 70) {
      toast.success(`¡Excelente! Obtuviste ${score}% - +${correctCount * 10} puntos`);
    } else {
      toast.info(`Obtuviste ${score}%. Revisa el contenido y vuelve a intentar.`);
    }
  };

  const handleExerciseComplete = () => {
    setExerciseCompleted(true);
    updateModuleProgress(moduleId, { exerciseCompleted: true });
    addPoints(20);
    toast.success('¡Ejercicio completado! +20 puntos');
  };

  const handleModuleComplete = () => {
    updateModuleProgress(moduleId, { completed: true });
    addPoints(50);
    toast.success('🎉 ¡Módulo completado! +50 puntos');
    
    if (moduleId < 16) {
      navigate(`/module/${moduleId + 1}`);
    } else {
      navigate('/modules');
    }
  };

  const canComplete = (quizSubmitted || progress?.quizScore !== undefined) && 
                      (exerciseCompleted || progress?.exerciseCompleted);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/modules" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Módulos
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Module Image */}
            <div className="lg:w-1/3">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                    Módulo {module.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Module Info */}
            <div className="lg:w-2/3">
              <h1 className="font-display text-3xl md:text-4xl mb-2">{module.title}</h1>
              <p className="text-muted-foreground text-lg mb-4">{module.subtitle}</p>
              <p className="text-foreground mb-6">{module.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span>{module.sections.length} secciones</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Brain className="h-5 w-5" />
                  <span>{module.quiz.length} preguntas</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display text-2xl mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Contenido del Módulo
          </h2>

          <Accordion type="multiple" className="space-y-4">
            {module.sections.map((section, index) => (
              <AccordionItem key={index} value={`section-${index}`} className="border border-border/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-muted/30 transition-colors">
                  <span className="flex items-center gap-3 text-left">
                    <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-semibold">
                      {index + 1}
                    </span>
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Do's and Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display text-2xl mb-6 flex items-center gap-2">
            <ListChecks className="h-6 w-6 text-primary" />
            Guía Práctica
          </h2>

          <Tabs defaultValue="do" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger value="do" className="data-[state=active]:bg-success/20 data-[state=active]:text-success">
                ✓ SÍ hacer
              </TabsTrigger>
              <TabsTrigger value="dont" className="data-[state=active]:bg-destructive/20 data-[state=active]:text-destructive">
                ✗ NO hacer
              </TabsTrigger>
            </TabsList>
            <TabsContent value="do" className="mt-4">
              <ul className="space-y-3">
                {module.doList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="dont" className="mt-4">
              <ul className="space-y-3">
                {module.dontList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="quote-box mb-8"
        >
          <Quote className="h-8 w-8 text-primary mb-4" />
          <p className="text-xl text-foreground mb-3 italic">"{module.quote.text}"</p>
          <p className="text-primary font-semibold">— {module.quote.author}</p>
        </motion.div>

        {/* Quiz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display text-2xl mb-6 flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Quiz de Comprensión
          </h2>

          <div className="space-y-6">
            {module.quiz.map((question, qIndex) => (
              <div key={qIndex} className="p-4 bg-muted/30 rounded-xl">
                <p className="font-semibold mb-4">
                  {qIndex + 1}. {question.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {question.options.map((option, oIndex) => {
                    const isSelected = quizAnswers[qIndex] === oIndex;
                    const isCorrect = question.correctIndex === oIndex;
                    const showResult = quizSubmitted;

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleQuizAnswer(qIndex, oIndex)}
                        disabled={quizSubmitted}
                        className={`p-3 rounded-lg text-left transition-all border ${
                          showResult
                            ? isCorrect
                              ? 'bg-success/20 border-success text-success'
                              : isSelected
                              ? 'bg-destructive/20 border-destructive text-destructive'
                              : 'bg-muted/30 border-border'
                            : isSelected
                            ? 'bg-primary/20 border-primary'
                            : 'bg-muted/30 border-border hover:border-primary/50'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!quizSubmitted && (
            <Button onClick={handleQuizSubmit} className="mt-6">
              Enviar Respuestas
            </Button>
          )}

          {quizSubmitted && (
            <div className="mt-6 p-4 bg-primary/10 rounded-xl">
              <p className="font-semibold">
                Resultado: {module.quiz.reduce((acc, q, i) => 
                  acc + (quizAnswers[i] === q.correctIndex ? 1 : 0), 0
                )} de {module.quiz.length} correctas
              </p>
            </div>
          )}
        </motion.div>

        {/* Exercise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <h2 className="font-display text-2xl mb-6 flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            Ejercicio Práctico
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">{module.exercise.title}</h3>
            <p className="text-muted-foreground mb-4">{module.exercise.description}</p>
            
            <ol className="space-y-3">
              {module.exercise.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {!exerciseCompleted && !progress?.exerciseCompleted ? (
            <Button onClick={handleExerciseComplete} variant="outline">
              Marcar como Completado
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Ejercicio completado</span>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          {moduleId > 1 && (
            <Link to={`/module/${moduleId - 1}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Módulo Anterior
              </Button>
            </Link>
          )}
          
          <div className="flex-1" />

          {progress?.completed ? (
            <div className="flex items-center gap-4">
              <span className="text-success flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Módulo completado
              </span>
              {moduleId < 16 && (
                <Link to={`/module/${moduleId + 1}`}>
                  <Button>
                    Siguiente Módulo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <Button 
              onClick={handleModuleComplete}
              disabled={!canComplete}
              variant="hero"
            >
              {canComplete ? 'Completar Módulo' : 'Completa el quiz y ejercicio'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
