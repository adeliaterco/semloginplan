import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';

const breakupTypes = [
  { id: 'distancing', label: 'Distanciamiento' },
  { id: 'conflict', label: 'Conflicto' },
  { id: 'third-party', label: 'Terceros' },
  { id: 'circumstances', label: 'Circunstancias' },
];

const phases = [
  { id: 'first-contact', label: 'Primer contacto' },
  { id: 'casual', label: 'Conversación casual' },
  { id: 'meeting', label: 'Proponer encuentro' },
];

export default function ScriptsGenerator() {
  const [formData, setFormData] = useState({
    breakupType: '',
    phase: '',
    exName: '',
    memory: '',
    achievement: '',
  });
  const [generatedScripts, setGeneratedScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateScripts = () => {
    if (!formData.breakupType || !formData.phase || !formData.exName) {
      toast.error('Completa los campos requeridos');
      return;
    }

    const scripts = [
      `Hey ${formData.exName}, vi algo que me recordó a ${formData.memory || 'esa vez que pasamos juntos'}. Espero que estés bien.`,
      `Hola ${formData.exName}! Logré ${formData.achievement || 'algo que quería contarte'}. Me acordé de ti. ¿Cómo has estado?`,
      `${formData.exName}, pasé por ${formData.memory || 'un lugar que visitamos'} y pensé en ti. Sin presión, solo quería saludar.`,
    ];

    setGeneratedScripts(scripts);
    toast.success('Scripts generados');
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Copiado al portapapeles');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Volver a Herramientas
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-3xl">Generador de Scripts</h1>
              <p className="text-muted-foreground">Crea mensajes estratégicos personalizados</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 mb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Tipo de ruptura</Label>
                <select
                  value={formData.breakupType}
                  onChange={(e) => setFormData({ ...formData, breakupType: e.target.value })}
                  className="w-full mt-1 p-2 rounded-lg bg-muted/50 border border-border"
                >
                  <option value="">Seleccionar...</option>
                  {breakupTypes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <Label>Fase actual</Label>
                <select
                  value={formData.phase}
                  onChange={(e) => setFormData({ ...formData, phase: e.target.value })}
                  className="w-full mt-1 p-2 rounded-lg bg-muted/50 border border-border"
                >
                  <option value="">Seleccionar...</option>
                  {phases.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
                </select>
              </div>
            </div>

            <div>
              <Label>Nombre de tu ex *</Label>
              <Input
                value={formData.exName}
                onChange={(e) => setFormData({ ...formData, exName: e.target.value })}
                placeholder="Ej: María"
                className="bg-muted/50"
              />
            </div>

            <div>
              <Label>Un recuerdo especial (opcional)</Label>
              <Input
                value={formData.memory}
                onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                placeholder="Ej: el viaje a la playa"
                className="bg-muted/50"
              />
            </div>

            <div>
              <Label>Un logro reciente (opcional)</Label>
              <Input
                value={formData.achievement}
                onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                placeholder="Ej: empecé a ir al gimnasio"
                className="bg-muted/50"
              />
            </div>

            <Button onClick={generateScripts} className="w-full">Generar 3 Mensajes</Button>
          </div>

          {generatedScripts.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display text-xl">Mensajes Generados</h3>
              {generatedScripts.map((script, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex justify-between items-start gap-4"
                >
                  <p className="flex-1">{script}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(script, index)}
                  >
                    {copiedIndex === index ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}
