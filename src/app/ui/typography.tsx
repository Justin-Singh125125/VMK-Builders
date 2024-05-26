import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type TypographyVariants = 'h1' | 'h3' | 'p' | 'label';

export type TypographyProps = {
  variant: TypographyVariants;
  className?: string;
  children: ReactNode;
};

const VARIANT_STYLES: Record<TypographyVariants, string> = {
  h1: 'text-h1',
  h3: 'text-h3',
  p: 'text-p',
  label: 'text-label',
};

export const Typography = ({ variant, className, children }: TypographyProps) => {
  const baseClassName = 'text-common-white';

  const Component = variant;

  return (
    <Component className={clsx(baseClassName, VARIANT_STYLES[variant], className)}>
      {children}
    </Component>
  );
};
