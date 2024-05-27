import { Section } from '../section';
import { Form } from './components/form';
import { Details } from './components/details';
import { Typography } from '../../ui/typography';

export const ContactUsSection = () => {
  return (
    <Section id="contact-us" className="bg-secondary-400">
      <Section.Header className="text-primary-400">Contact Us</Section.Header>
      <Section.Content className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div>
          <Typography variant="h3" className="text-primary-400 pb-2">
            Drop us a line!
          </Typography>
          <Form />
        </div>
        <Details />
      </Section.Content>
    </Section>
  );
};
