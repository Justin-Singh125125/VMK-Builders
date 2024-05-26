import clsx from 'clsx';
import { ReactNode } from 'react';
import { Typography } from '../ui/typography';

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={clsx('py-14 px-[18.875rem] flex flex-col gap-8', className)}>
      {children}
    </section>
  );
};

export type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: SectionHeaderProps) => {
  return (
    <Typography variant="h1" className={clsx('text-center uppercase font-bold', className)}>
      {children}
    </Typography>
  );
};

export type ContentHeaderProps = {
  children: ReactNode;
  className?: string;
};

const Content = ({ children, className }: SectionHeaderProps) => {
  return <div className={clsx(className)}>{children}</div>;
};

Section.Header = Header;
Section.Content = Content;
