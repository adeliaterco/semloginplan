import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Search, BookOpen, Library, AlertTriangle,
  ArrowRight, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';

const tools = [
  {
    id: 'scripts',
    icon: MessageSquare,
    title: 'Generador de Scripts',
    description: 'Genera mensajes estratégicos personalizados según tu tipo de ruptura y fase actual.',
    color: 'from-primary to-primary/70',
    features: ['3 mensajes por generación', 'Personalización completa', 'Copiar con un click'],
  },
  {
    id: 'signals',
    icon: Search,
    title: 'Análisis de Señales',
    description: 'Analiza las acciones de tu ex y obtén una interpretación con semáforo de colores.',
    color: 'from-success to-success/70',
    features: ['Sistema semáforo', 'Recomendaciones', 'Timing sugerido'],
  },
  {
    id: 'journaling',
    icon: BookOpen,
    title: 'Diario de Reflexión',
    description: 'Registra tus pensamientos diarios con preguntas guiadas rotativas.',
    color: 'from-blue-500 to-blue-700',
    features: ['Preguntas diarias', 'Historial completo', 'Seguimiento emocional'],
  },
  {
    id: 'library',
    icon: Library,
    title: 'Biblioteca de Recursos',
    description: 'Accede a libros, podcasts y apps recomendadas para tu desarrollo.',
    color: 'from-purple-500 to-purple-700',
    features: ['Libros recomendados', 'Podcasts útiles', 'Apps de apoyo'],
  },
  {
    id: 'planb',
    icon: AlertTriangle,
    title: 'Plan B - Escenarios',
    description: 'Prepárate para diferentes resultados con planes de acción específicos.',
    color: 'from-warning to-warning/70',
    features: ['4 escenarios', 'Acciones detalladas', 'Ejercicios prácticos'],
  },
];

export default function Tools() {
  const navigate = useNavigate();
  const { isLoggedIn } = useApp();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

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
            <span className="gradient-text">Herramientas</span> Interactivas
          </h1>
          <p className="text-muted-foreground text-lg">
            5 herramientas gratuitas para apoyar tu proceso de reconquista.
          </p>
        </motion.div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl mb-2">Todas las herramientas</h2>
              <p className="text-muted-foreground">
                Sin paywalls, sin suscripciones, sin límites. Usa todas las herramientas cuantas veces necesites.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link to={`/tools/${tool.id}`}>
                <div className="tool-card h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                    <tool.icon className="h-7 w-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button variant="outline" className="w-full mt-auto group">
                    Usar Herramienta
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
