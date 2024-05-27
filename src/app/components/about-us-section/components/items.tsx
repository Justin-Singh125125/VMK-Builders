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
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt veniam possimus. Blanditiis at placeat maxime nesciunt exercitationem, voluptatibus assumenda dignissimos ad, quidem itaque quasi nihil libero accusantium. Sit, magni.',
  },
  {
    src: Image2,
    alt: 'Image 2',
    title: 'Why Pick us?',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt veniam possimus. Blanditiis at placeat maxime nesciunt exercitationem, voluptatibus assumenda dignissimos ad, quidem itaque quasi nihil libero accusantium. Sit, magni.',
  },
  {
    src: Image3,
    alt: 'Image 3',
    title: 'We look forward to hearing from you',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt veniam possimus. Blanditiis at placeat maxime nesciunt exercitationem, voluptatibus assumenda dignissimos ad, quidem itaque quasi nihil libero accusantium. Sit, magni.',
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
