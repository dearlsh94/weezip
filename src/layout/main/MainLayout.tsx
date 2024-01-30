import * as React from 'react';

import './MainLayout.scss';
import { ScrollProgress } from '@components/ui/progress';
import { Footer } from '@module/footer';
import { Header } from '@module/header';
import { SideBarNavigation } from '@module/side';

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
      <SideBarNavigation />
    </main>
  );
}
