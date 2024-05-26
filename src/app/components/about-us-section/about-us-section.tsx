import { Typography } from '../../ui/typography';
import { Section } from '../section';
import { Item } from './components/item';

import { Items } from './components/items';

export const AboutUsSection = () => {
  return (
    <Section className="bg-primary-400">
      <Section.Header className="text-secondary-400">About Us</Section.Header>
      <Section.Content>
        <Items />
      </Section.Content>
    </Section>
  );
};
