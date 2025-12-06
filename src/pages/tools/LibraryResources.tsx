import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Library, Book, Headphones, Smartphone } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const resources = {
  books: [
    { title: 'Attached', author: 'Amir Levine', desc: 'Estilos de apego' },
    { title: 'No More Mr. Nice Guy', author: 'Robert Glover', desc: 'Masculinidad sana' },
    { title: 'The 5 Love Languages', author: 'Gary Chapman', desc: 'Lenguajes del amor' },
    { title: 'Models', author: 'Mark Manson', desc: 'Comunicación auténtica' },
  ],
  podcasts: [
    { title: 'The Art of Charm', desc: 'Habilidades sociales' },
    { title: 'Relationship Alive', desc: 'Relaciones saludables' },
    { title: 'The Mindset Mentor', desc: 'Desarrollo personal' },
  ],
  apps: [
    { title: 'Headspace', desc: 'Meditación' },
    { title: 'Daylio', desc: 'Registro de ánimo' },
    { title: 'Habitica', desc: 'Hábitos gamificados' },
  ],
};

export default function LibraryResources() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Volver
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Library className="h-6 w-6 text-purple-500" />
            </div>
            <h1 className="font-display text-3xl">Biblioteca de Recursos</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <Book className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl mb-4">Libros</h3>
              <div className="space-y-3">
                {resources.books.map((book) => (
                  <div key={book.title} className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-sm">{book.title}</p>
                    <p className="text-xs text-muted-foreground">{book.author} • {book.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Headphones className="h-8 w-8 text-success mb-4" />
              <h3 className="font-display text-xl mb-4">Podcasts</h3>
              <div className="space-y-3">
                {resources.podcasts.map((pod) => (
                  <div key={pod.title} className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-sm">{pod.title}</p>
                    <p className="text-xs text-muted-foreground">{pod.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Smartphone className="h-8 w-8 text-warning mb-4" />
              <h3 className="font-display text-xl mb-4">Apps</h3>
              <div className="space-y-3">
                {resources.apps.map((app) => (
                  <div key={app.title} className="p-3 bg-muted/30 rounded-lg">
                    <p className="font-semibold text-sm">{app.title}</p>
                    <p className="text-xs text-muted-foreground">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
