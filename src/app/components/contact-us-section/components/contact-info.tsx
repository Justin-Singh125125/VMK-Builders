import { Link } from '../../../ui/link';
import { Typography } from '../../../ui/typography';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h3" className="text-primary-400">
        VMK Builders & CO. License #000000
      </Typography>
      <Link href="tel:9165348218" className="text-primary-400">
        (555) 555-5555
      </Link>
    </div>
  );
};
