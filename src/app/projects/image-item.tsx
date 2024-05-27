import Image, { ImageProps } from 'next/image';
import Img from './images/IMG_6524.jpeg';

export type ImageItemProps = Pick<ImageProps, 'src' | 'alt'>;

export const ImageItem = ({ src, alt }: ImageItemProps) => {
  return (
    <div className="relative h-72">
      <Image priority={false} src={src} alt={alt} fill />
    </div>
  );
};
