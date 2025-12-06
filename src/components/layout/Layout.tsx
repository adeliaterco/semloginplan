import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useApp } from '@/contexts/AppContext';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  const { isLoggedIn } = useApp();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${isLoggedIn ? 'pt-16' : ''}`}>
        {children}
      </main>
      {showFooter && isLoggedIn && <Footer />}
    </div>
  );
}
