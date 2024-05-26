import { Typography } from '../../ui/typography';
import { Section } from '../section';
import { Item } from './components/item';

export const AboutUsSection = () => {
  return (
    <Section className="bg-primary-400 px-[18.875rem]">
      <Typography variant="h1" className="text-secondary-400 text-center uppercase font-bold">
        About Us
      </Typography>
      <div>
        <Item />
      </div>
    </Section>
  );
};
