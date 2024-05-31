'use client';

import { Button } from '../ui/button';
import { Link } from '../ui/link';
import { Typography } from '../ui/typography';

export const Hero = () => {
  return (
    <div className="w-full h-[800px] relative overflow-hidden">
      <iframe
        className="absolute w-full h-full transform scale-150 max-lg:scale-[2] max-md:scale-[3] max-sm:scale-[4]"
        src="https://player.vimeo.com/video/897387085?h=4f192c9252&autoplay=1&loop=1&autopause=0&muted=1&controls=0"
        title="Example Video"
      />

      <div className="absolute flex justify-center items-center w-full h-full flex-col z-10 gap-4">
        <Typography variant="h1" className="text-common-white font-bold">
          Quality Comes First.
        </Typography>

        <div className="w-[400px] grid grid-cols-1 gap-8 max-md:gap-6 max-md:w-[275px]">
          <Link href="#contact-us">
            <Button className="bg-secondary-400 w-full">Request An Estimate</Button>
          </Link>
          <Link href="/projects">
            <Button className="bg-secondary-400 w-full">Our Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
