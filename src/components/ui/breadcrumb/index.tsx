import Linker from '@components/ui/Linker';
import React from 'react';
import './index.scss';

export interface BreadcrumbStep {
  url: string;
  name: string;
}

interface BreadcrumbProps {
  steps: BreadcrumbStep[];
}

export default function Breadcrumb({ steps }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <ol>
        {steps.map(step => (
          <li key={step.name}>
            <Linker url={step.url} aria-label={`${step.name} 이동`}>
              {step.name}
            </Linker>
          </li>
        ))}
      </ol>
    </nav>
  );
}
