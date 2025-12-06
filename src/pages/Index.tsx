import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, ArrowRight, Sparkles, Users, Shield, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.png';

const pillars = [
  {
    icon: Sparkles,
    title: 'Autotransformación',
    description: 'Conviértete en la mejor versión de ti mismo física, mental y emocionalmente.',
  },
  {
    icon: Target,
    title: 'Estrategia',
    description: 'Sigue un plan estructurado de 21 días con acciones específicas y medibles.',
  },
  {
    icon: Shield,
    title: 'Sostenibilidad',
    description: 'Construye bases sólidas para una relación más fuerte y duradera.',
  },
];

const testimonials = [
  {
    name: 'Carlos M.',
    age: 28,
    text: 'Después de seguir el programa al pie de la letra, no solo recuperé a mi ex, sino que nuestra relación es mucho mejor. La clave fue el trabajo en mí mismo.',
    result: 'Reconciliación exitosa',
  },
  {
    name: 'David R.',
    age: 32,
    text: 'Aunque no volvimos, el programa me transformó. Ahora soy una persona más segura y encontré a alguien increíble. Valió cada día.',
    result: 'Crecimiento personal',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
              >
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Sistema Completo</span>
              </motion.div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
                <span className="text-foreground">PLAN A</span>
                <br />
                <span className="gradient-text">RECONQUISTA</span>
                <br />
                <span className="text-foreground">EN 21 DÍAS</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                El programa definitivo para hombres que quieren reconquistar a su ex pareja 
                a través de la autotransformación y estrategia comprobada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Ver Programa
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                    >
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-foreground font-semibold">+3,847</span>
                  <span className="text-muted-foreground"> hombres transformados</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <img
                  src={heroImage}
                  alt="Plan A - Reconquista"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl glow-border" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Los 3 <span className="gradient-text">Pilares</span> del Éxito
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un enfoque integral que combina desarrollo personal, estrategia y sostenibilidad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Todo lo que <span className="gradient-text">necesitas</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Un programa completo con herramientas prácticas, ejercicios guiados y seguimiento diario.
              </p>

              <div className="space-y-4">
                {[
                  '16 módulos completos y detallados',
                  'Tracker de progreso de 21 días',
                  'Generador de mensajes estratégicos',
                  'Análisis de señales de tu ex',
                  'Diario de reflexión guiado',
                  'Biblioteca de recursos recomendados',
                  'Datos 100% locales y privados',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '21', label: 'Días de programa' },
                { number: '16', label: 'Módulos completos' },
                { number: '5', label: 'Herramientas interactivas' },
                { number: '∞', label: 'Acceso ilimitado' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="font-display text-4xl text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Historias de <span className="gradient-text">Éxito</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados reales de hombres que siguieron el programa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age} años</div>
                  </div>
                  <div className="bg-success/20 text-success text-sm font-medium px-3 py-1 rounded-full">
                    {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative z-10">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                ¿Listo para <span className="gradient-text">comenzar</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Tu transformación comienza hoy. 21 días para convertirte en tu mejor versión.
              </p>
              <Link to="/register">
                <Button variant="hero" size="xl">
                  Comenzar Mi Transformación
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer for Landing */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 PLAN A - Reconquista en 21 Días.</p>
        </div>
      </footer>
    </div>
  );
}
