import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useApp } from '@/contexts/AppContext';
import { dailyQuestions } from '@/data/modules';
import { toast } from 'sonner';

export default function Journaling() {
  const { journalEntries, addJournalEntry, addPoints } = useApp();
  const [content, setContent] = useState('');
  
  const todayQuestion = dailyQuestions[new Date().getDate() % dailyQuestions.length];

  const saveEntry = () => {
    if (!content.trim()) {
      toast.error('Escribe algo antes de guardar');
      return;
    }
    addJournalEntry({ date: new Date().toISOString(), content, question: todayQuestion });
    addPoints(15);
    setContent('');
    toast.success('Entrada guardada +15 puntos');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Volver a Herramientas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h1 className="font-display text-3xl">Diario de Reflexión</h1>
              <p className="text-muted-foreground">Registra tus pensamientos diarios</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="bg-primary/10 rounded-xl p-4 mb-4">
              <p className="font-medium text-primary">📝 Pregunta del día:</p>
              <p className="mt-1">{todayQuestion}</p>
            </div>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe tu reflexión..."
              className="w-full min-h-[200px] p-3 rounded-lg bg-muted/50 border border-border resize-none"
            />
            
            <Button onClick={saveEntry} className="w-full mt-4">
              <Save className="mr-2 h-4 w-4" /> Guardar Entrada
            </Button>
          </div>

          {journalEntries.length > 0 && (
            <div>
              <h3 className="font-display text-xl mb-4">Historial ({journalEntries.length} entradas)</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {journalEntries.slice(0, 5).map((entry) => (
                  <div key={entry.id} className="glass-card rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      {new Date(entry.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </p>
                    <p className="text-sm text-primary mb-2 italic">"{entry.question}"</p>
                    <p className="text-sm">{entry.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
