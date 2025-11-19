import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('rounded-lg border border-surface-light bg-surface p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h3 className={cn('text-lg font-semibold text-white', className)} {...props}>
    {children}
  </h3>
);

const CardContent: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent };
