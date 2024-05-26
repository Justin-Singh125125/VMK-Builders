import { clsx } from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-primary-400 text-h3 text-common-white px-8 py-2 font-semibold',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
