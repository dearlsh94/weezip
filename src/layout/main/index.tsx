import * as React from 'react';
import './index.scss';
import Header from '@module/Header';
import Footer from '@module/Footer';
import { ScrollProgress } from '@components/ui/progress';

interface Props {
  children: React.ReactNode;
  className: string;
}

const MainLayout = ({ children, className }: Props) => {
  return (
    <main className={`main-layout ${className}`}>
      <Header />
      <ScrollProgress />
      <div className="content">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
