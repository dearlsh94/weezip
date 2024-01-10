import * as React from 'react';
import './MainLayout.scss';
import { ScrollProgress } from '@components/ui/progress';
import { Header } from '@module/Header';
import { Footer } from '@module/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <main className={`main-layout ${className}`}>
      <Header />
      <ScrollProgress />
      <div className="content">{children}</div>
      <Footer />
    </main>
  );
}
