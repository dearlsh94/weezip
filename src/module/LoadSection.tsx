import * as React from 'react';
import '@scss/layout/LoadSection.scss';
import CircleProgress from '@components/ui/CircleProgress';

interface LoadSectionProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
}

const LoadSection = ({ children, isLoading, isError }: LoadSectionProps) => {
  return (
    <section className="load-section">
      {isLoading ? <CircleProgress className="spinner" height={360} /> : isError ? <div>Error</div> : children}
    </section>
  );
};

export default LoadSection;
