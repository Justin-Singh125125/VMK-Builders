import { Typography } from '../../../ui/typography';
import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

export const Input = ({ className, label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="label" className="text-primary-400">
        {label}
      </Typography>
      <input className={clsx('p-2 w-full outline-primary-400  text-p', className)} {...rest} />
    </div>
  );
};
