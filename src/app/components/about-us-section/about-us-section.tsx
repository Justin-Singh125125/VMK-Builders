import { Typography } from '../../ui/typography';
import { Section } from '../section';
import { Item } from './components/item';

import { Items } from './components/items';

export const AboutUsSection = () => {
  return (
    <Section className="bg-primary-400">
      <Section.Header>
        <Typography variant="h1" className="text-secondary-400 text-center uppercase font-bold">
          About Us
        </Typography>
      </Section.Header>
      <Section.Content>
        <Items />
      </Section.Content>
    </Section>
  );
};
