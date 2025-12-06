import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const scenarios = [
  {
    id: 'reconciliation',
    title: 'Escenario 1: Reconciliación',
    content: 'Si ella muestra interés genuino en volver, no te apresures. Establece nuevas bases, discute qué cambió, y construye gradualmente.',
    actions: ['Propón conversación seria sobre la relación', 'Establece acuerdos claros', 'Avanza lentamente'],
  },
  {
    id: 'friendship',
    title: 'Escenario 2: Solo Amistad',
    content: 'Si ella quiere ser amigos pero no pareja, decide honestamente si puedes manejarlo sin esperar más.',
    actions: ['Evalúa si la amistad te conviene', 'Establece límites claros', 'Mantén distancia si es necesario'],
  },
  {
    id: 'no-contact',
    title: 'Escenario 3: Sin Contacto',
    content: 'Si ella no responde o pide no contacto, respétalo absolutamente. Enfócate 100% en ti.',
    actions: ['Respeta su decisión', 'No insistas', 'Continúa tu desarrollo personal'],
  },
  {
    id: 'new-relationship',
    title: 'Escenario 4: Ella con Otra Persona',
    content: 'Si está con alguien más, no compitas. Enfócate en ti y acepta que el resultado está fuera de tu control.',
    actions: ['No interfieras', 'Trabaja en aceptación', 'Sigue adelante con tu vida'],
  },
];

export default function PlanB() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Volver
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
            <div>
              <h1 className="font-display text-3xl">Plan B - Escenarios</h1>
              <p className="text-muted-foreground">Prepárate para cualquier resultado</p>
            </div>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {scenarios.map((scenario) => (
              <AccordionItem key={scenario.id} value={scenario.id} className="glass-card rounded-xl border-0">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-semibold text-left">{scenario.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground mb-4">{scenario.content}</p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="font-semibold mb-2">Acciones recomendadas:</p>
                    <ul className="space-y-2">
                      {scenario.actions.map((action, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Layout>
  );
}
