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
    <div className="grid grid-cols-2 gap-2 items-start">
      <Image
        width={600}
        height={300}
        alt={alt}
        src={src}
        className={clsx(reverseLayout ? 'col-start-2 row-start-1' : undefined)}
      />
      <div
        className={clsx(
          'flex flex-col gap-8',
          reverseLayout ? 'col-start-1 row-start-1' : undefined
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
