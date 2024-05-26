import Image, { ImageProps } from 'next/image';
import Img from './images/IMG_6524.jpeg';

export type ImageItemProps = Pick<ImageProps, 'src' | 'alt'>;

export const ImageItem = ({ src, alt }: ImageItemProps) => {
  return (
    <div style={{ width: 'calc(33.333% - 1rem)', height: 300, position: 'relative' }}>
      <Image
        priority={false}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100%, (max-width: 1200px) 33.333%"
      />
    </div>
  );
};
