import { ReactNode } from 'react';
import { Typography } from '../ui/typography';
import { Section } from './section';
import { Link } from '../ui/link';

export const Footer = () => {
  return (
    <footer className="bg-primary-300 py-14 px-[18.875rem] flex flex-col gap-2 max-xl:px-16 max-md:px-8">
      <Typography variant="p" className="text-center font-bold">
        VMK Builders & CO
      </Typography>
      <Link
        href="tel:9167546962"
        className="text-common-white-400 text-center flex justify-center w-full"
      >
        (916) 754-6962
      </Link>
      <Typography variant="p" className="text-primary-100 text-center">
        Copyright © 2024 VMK Builders & CO - All Rights Reserved.
      </Typography>
    </footer>
  );
};
