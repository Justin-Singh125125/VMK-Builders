import { Section } from '../components/section';
import { Images } from './images';

const Projects = () => {
  return (
    <Section className="bg-secondary-400">
      <Section.Header className="text-primary-400">Portfolio</Section.Header>
      <Section.Content>
        <Images />
      </Section.Content>
    </Section>
  );
};

export default Projects;
