import * as React from 'react';
import './Loader.scss';
import { CircleProgress } from '../progress/circle';

interface LoaderProps {
  children: React.ReactNode;
  isLoading: boolean;
  isError: boolean;
}

export default function Loader({ children, isLoading, isError }: LoaderProps) {
  return (
    <section className="load-section">
      {isLoading ? <CircleProgress className="spinner" height={360} /> : isError ? <div>Error</div> : children}
    </section>
  );
}
