import { Typography } from '../../../ui/typography';

export const Hours = () => {
  return (
    <div>
      <Typography variant="h3" className="text-primary-400">
        Hours
      </Typography>
      <div className="mt-2">
        <Typography variant="p" className="text-primary-400">
          Mon 09:00 am – 05:00 pm
        </Typography>
        <Typography variant="p" className="text-primary-400">
          Tue 09:00 am – 05:00 pm
        </Typography>
        <Typography variant="p" className="text-primary-400">
          Wed 09:00 am – 05:00 pm
        </Typography>
        <Typography variant="p" className="text-primary-400">
          Thu 09:00 am – 05:00 pm
        </Typography>
        <Typography variant="p" className="text-primary-400">
          Fri 09:00 am – 05:00 pm
        </Typography>
        <Typography variant="p" className="text-primary-400 font-semibold">
          Sat Closed
        </Typography>
        <Typography variant="p" className="text-primary-400 font-semibold">
          Sun Closed
        </Typography>
      </div>
    </div>
  );
};
