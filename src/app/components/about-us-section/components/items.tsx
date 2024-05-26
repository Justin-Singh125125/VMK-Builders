import { Item, ItemProps } from './item';

import Image1 from './pic-1.webp';
import Image2 from './pic-2.webp';
import Image3 from './pic-3.webp';

const items: Omit<ItemProps, 'reverseLayout'>[] = [
  {
    src: Image1,
    alt: 'Image 1',
    title: 'Our Company',
    description:
      "At Pro Line Builders, we're a family-operated construction business dedicated to exceptional service. With a commitment to 5-star quality, honesty, and efficiency, we bring 10+ years of experience and values. Our team consists of skilled professionals passionate about exceeding expectations. Transparency, integrity, and reliability are at the core of our operations, fostering trust with our clients. We promise not just structures, but enduring relationships built on integrity and superior craftsmanship.",
  },
  {
    src: Image2,
    alt: 'Image 2',
    title: 'Why Pick us?',
    description:
      '"Our construction company stands as the prime choice, excelling in delivering unparalleled quality, reliability, and utmost satisfaction to ensure your project\'s success." \n\nVeterans/Active will Receive 3.5% off our services',
  },
  {
    src: Image3,
    alt: 'Image 3',
    title: 'We look forward to hearing from you',
    description:
      'Our services include: \nFencing, Wood & Metal Gates, Painting, Handy Repairs, Pressure Washing, Dry Rot Repair, Gutter Cleaning & Upgrades, Demolition, Landscaping, Replacing Light Fixtures, interior carpentry and Shed Upgrades.',
  },
];

export const Items = () => {
  return (
    <div className="grid gap-8">
      {items.map((props, index) => {
        return <Item key={props.title} reverseLayout={(index + 1) % 2 === 0} {...props} />;
      })}
    </div>
  );
};
