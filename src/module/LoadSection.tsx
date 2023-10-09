import * as React from 'react';
import '@scss/layout/LoadLayout.scss';
import CircleProgress from '@components/ui/CircleProgress';

interface LoadLayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
}

const LoadSection = ({ children, isLoading, isError }: LoadLayoutProps) => {
  return (
    <section className="load-section">
      {isLoading ? <CircleProgress height={360} /> : isError ? <div>Error</div> : children}
    </section>
  );
};

export default LoadSection;
