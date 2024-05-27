import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Typography } from '../ui/typography';

export type SectionProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({ children, className, ...rest }: SectionProps) => {
  return (
    <section className={clsx('py-14 px-72 flex flex-col gap-8 max-md:px-16', className)} {...rest}>
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
