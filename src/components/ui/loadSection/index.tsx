import * as React from 'react';
import './index.scss';
import CircleProgress from '@components/ui/CircleProgress';

interface LoadSectionProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
}

export default function LoadSection({ children, isLoading, isError }: LoadSectionProps) {
  return (
    <section className="load-section">
      {isLoading ? <CircleProgress className="spinner" height={360} /> : isError ? <div>Error</div> : children}
    </section>
  );
}
