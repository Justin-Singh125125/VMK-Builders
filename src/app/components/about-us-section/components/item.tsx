import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import { Typography } from '../../../ui/typography';

export type ItemProps = {
  reverseLayout?: boolean;
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

export const Item = ({ reverseLayout, src, alt, title, description }: ItemProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 items-start max-md:flex max-md:flex-col">
      <Image
        width={0}
        height={0}
        alt={alt}
        src={src}
        className={clsx(
          'w-full h-auto',
          { 'col-start-2 row-start-1': reverseLayout },
          'max-md:order-2'
        )}
      />
      <div
        className={clsx(
          'flex flex-col gap-8 items-center',
          clsx({
            'col-start-1 row-start-1': reverseLayout,
          }),
          'max-md:order-1'
        )}
      >
        <Typography variant="h3" className="text-center">
          {title}
        </Typography>
        <Typography variant="p" className="text-primary-100 font-light whitespace-pre-wrap">
          {description}
        </Typography>
      </div>
    </div>
  );
};
