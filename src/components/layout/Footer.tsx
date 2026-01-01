import { Heart, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-2">PRP</h3>
            <p className="text-muted-foreground text-sm">
              Tu camino hacia una mejor versión de ti mismo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social & Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Síguenos</h4>
            <div className="flex gap-3 mb-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" className="gap-2">
              <Heart className="h-4 w-4" />
              Apoyar el Proyecto
            </Button>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 PRP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
