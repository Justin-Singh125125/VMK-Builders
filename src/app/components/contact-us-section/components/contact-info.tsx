import { Link } from '../../../ui/link';
import { Typography } from '../../../ui/typography';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h3" className="text-primary-400">
        VMK Builders & CO. License #5795854
      </Typography>
      <Link href="tel:9167546962" className="text-primary-400">
        (916) 754-6962
      </Link>
    </div>
  );
};
