import { Link } from '../../../ui/link';
import { Typography } from '../../../ui/typography';

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h3" className="text-primary-400">
        Pro Line Builders Inc. License #1015871
      </Typography>
      <Link href="tel:9165348218" className="text-primary-400">
        (916) 534-8218
      </Link>
    </div>
  );
};
