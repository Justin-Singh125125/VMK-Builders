import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';
import { Typography } from '../../../ui/typography';

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & { label: string };

export const TextArea = ({ className, label, ...rest }: TextAreaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="label" className="text-primary-400">
        {label}
      </Typography>
      <textarea className={clsx('p-2 w-full outline-primary-400 text-p', className)} {...rest} />
    </div>
  );
};
