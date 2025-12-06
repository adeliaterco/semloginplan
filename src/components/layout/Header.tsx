import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Target, LayoutDashboard, BookOpen, Calendar, Wrench, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/modules', label: 'Módulos', icon: BookOpen },
  { path: '/tracker', label: 'Tracker', icon: Calendar },
  { path: '/tools', label: 'Herramientas', icon: Wrench },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout, user } = useApp();
  const location = useLocation();

  if (!isLoggedIn) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Target className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl tracking-wider text-foreground">
                PLAN A
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/modules' && location.pathname.startsWith('/module/'));
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={cn(
                      'gap-2',
                      isActive && 'bg-primary text-primary-foreground'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Hola, {user?.name}
            </span>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className="w-full justify-start gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <hr className="border-border my-2" />
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-muted-foreground"
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
