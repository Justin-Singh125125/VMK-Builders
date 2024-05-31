import { Item, ItemProps } from './item';

import Image1 from './pic-1.webp';
import Image2 from './pic-2.png';
import Image3 from '../../../projects/images/2.jpeg';

const items: Omit<ItemProps, 'reverseLayout'>[] = [
  {
    src: Image1,
    alt: 'Image 1',
    title: 'Our Company',
    description:
      "At VMK Builders, we specialize in crafting high-quality decks with over a decade of experience. Our commitment to excellence, honesty, and efficiency ensures 5-star service on every project. With a dedicated team of skilled professionals, we prioritize transparency, integrity, and reliability, fostering lasting trust with our clients. Beyond building decks, we're dedicated to creating enduring relationships built on superior craftsmanship and integrity.",
  },
  {
    src: Image2,
    alt: 'Image 2',
    title: 'Why Pick us?',
    description:
      'Our construction company is your prime choice, excelling in delivering unmatched quality, reliability, and utmost satisfaction to ensure the success of your project. We pride ourselves on selecting premium materials, offering financing options, and providing a warranty with every deck build.',
  },
  {
    src: Image3,
    alt: 'Image 3',
    title: 'Our services include:',
    description:
      '• Deck Building \n• Fencing \n• Wood & Metal Gates \n• Landscaping/Hardscaping \n• Pavers \n• Grading \n• Custom Mailboxes',
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
