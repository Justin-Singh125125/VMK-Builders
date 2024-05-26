import { AboutUsSection } from './components/about-us-section/about-us-section';
import { ContactUsSection } from './components/contact-us-section/contact-us-section';
import { Hero } from './components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ContactUsSection />
    </main>
  );
}
