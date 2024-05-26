import { Typography } from '../../../ui/typography';
import { ContactInfo } from './contact-info';
import { Hours } from './hours';

export const Details = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h3" className="text-primary-400 pb-2">
        We look forward to hearing from you!
      </Typography>
      <ContactInfo />
      <Hours />
    </div>
  );
};
