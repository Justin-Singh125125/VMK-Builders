import clsx from 'clsx';
import { ReactNode } from 'react';

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={clsx('pt-14 px-[18.875rem] flex flex-col gap-8', className)}>
      {children}
    </section>
  );
};

export type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: SectionHeaderProps) => {
  return <header className={clsx(className)}>{children}</header>;
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
