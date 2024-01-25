import React from 'react';

import './Breadcrumb.scss';
import { Linker } from '../linker';

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
            <Linker label={`${step.name} 이동`} url={step.url}>
              {step.name}
            </Linker>
          </li>
        ))}
      </ol>
    </nav>
  );
}
