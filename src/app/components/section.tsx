import clsx from 'clsx';
import { ReactNode } from 'react';

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return <section className={clsx('pt-14', className)}>{children}</section>;
};
