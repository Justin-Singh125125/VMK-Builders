import { ReactNode } from 'react';
import { Typography } from '../ui/typography';
import { Section } from './section';
import { Link } from '../ui/link';

export const Footer = () => {
  return (
    <footer className="bg-primary-300 py-14 px-[18.875rem] flex flex-col gap-2 max-xl:px-16 max-md:px-8">
      <Typography variant="p" className="text-center font-bold">
        Pro Line Builders
      </Typography>
      <Link
        href="tel:9165348218"
        className="text-common-white-400 text-center flex justify-center w-full"
      >
        (916) 534-8218
      </Link>
      <Typography variant="p" className="text-primary-100 text-center">
        Copyright © 2024 Pro Line Builders - All Rights Reserved.
      </Typography>
    </footer>
  );
};
