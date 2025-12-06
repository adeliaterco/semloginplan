import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function SignalsAnalysis() {
  const [signal, setSignal] = useState('');
  const [result, setResult] = useState<{ color: string; message: string; timing: string } | null>(null);

  const analyzeSignal = () => {
    if (!signal.trim()) return;

    const lowerSignal = signal.toLowerCase();
    let analysis = { color: 'yellow', message: '', timing: '' };

    if (lowerSignal.includes('mensaje') || lowerSignal.includes('escribió') || lowerSignal.includes('contactó')) {
      analysis = { color: 'green', message: 'Señal positiva. Está buscando contacto contigo.', timing: 'Responde en 2-4 horas, no inmediatamente.' };
    } else if (lowerSignal.includes('bloqueó') || lowerSignal.includes('ignoró') || lowerSignal.includes('no responde')) {
      analysis = { color: 'red', message: 'Señal de distancia. Necesita más espacio.', timing: 'Espera al menos 1 semana antes de intentar contacto.' };
    } else if (lowerSignal.includes('like') || lowerSignal.includes('vio') || lowerSignal.includes('story')) {
      analysis = { color: 'yellow', message: 'Señal neutral. Hay curiosidad pero no es invitación directa.', timing: 'No actúes aún. Continúa tu proceso.' };
    } else {
      analysis = { color: 'yellow', message: 'Señal ambigua. No saques conclusiones precipitadas.', timing: 'Mantén el curso del programa sin cambios.' };
    }

    setResult(analysis);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Volver a Herramientas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
              <Search className="h-6 w-6 text-success" />
            </div>
            <div>
              <h1 className="font-display text-3xl">Análisis de Señales</h1>
              <p className="text-muted-foreground">Interpreta las acciones de tu ex</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 mb-6">
            <label className="block mb-2 font-medium">¿Qué hizo tu ex?</label>
            <textarea
              value={signal}
              onChange={(e) => setSignal(e.target.value)}
              placeholder="Describe la acción o señal que quieres analizar..."
              className="w-full min-h-[120px] p-3 rounded-lg bg-muted/50 border border-border resize-none"
            />
            <Button onClick={analyzeSignal} className="w-full mt-4">Analizar Señal</Button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`glass-card rounded-2xl p-6 border-l-4 ${
                result.color === 'green' ? 'border-success' : result.color === 'red' ? 'border-destructive' : 'border-warning'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  result.color === 'green' ? 'bg-success/20' : result.color === 'red' ? 'bg-destructive/20' : 'bg-warning/20'
                }`}>
                  <AlertCircle className={`h-6 w-6 ${
                    result.color === 'green' ? 'text-success' : result.color === 'red' ? 'text-destructive' : 'text-warning'
                  }`} />
                </div>
                <span className="font-display text-xl">
                  {result.color === 'green' ? 'VERDE - Positivo' : result.color === 'red' ? 'ROJO - Precaución' : 'AMARILLO - Neutral'}
                </span>
              </div>
              <p className="mb-4">{result.message}</p>
              <div className="bg-muted/30 rounded-lg p-3">
                <span className="font-semibold">⏰ Timing recomendado:</span> {result.timing}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
