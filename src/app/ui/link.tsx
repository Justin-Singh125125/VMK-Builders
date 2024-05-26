import { clsx } from 'clsx';
import BaseLink, { LinkProps as BaseLinkProps } from 'next/link';
import { ReactNode } from 'react';

export type LinkProps = BaseLinkProps & { children: ReactNode; className?: string };

export const Link = ({ children, className, ...rest }: LinkProps) => {
  return (
    <BaseLink className={clsx('text-common-white', className)} {...rest}>
      {children}
    </BaseLink>
  );
};
