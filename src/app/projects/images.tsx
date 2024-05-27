import { ImageProps } from 'next/image';
import { ImageItem } from './image-item';

import Image1 from './images/1.jpeg';
import Image2 from './images/2.jpeg';
import Image3 from './images/3.jpeg';
import Image4 from './images/4.jpeg';
import Image5 from './images/5.jpeg';
import Image6 from './images/6.jpeg';
import Image7 from './images/7.jpeg';
import Image8 from './images/8.jpeg';
import Image9 from './images/9.jpeg';
import Image10 from './images/10.jpeg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];

export const Images = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
      {images.map(({ src }, index) => {
        const alt = `image-${index + 1}`;
        return <ImageItem key={alt} alt={alt} src={src} />;
      })}
    </div>
  );
};
