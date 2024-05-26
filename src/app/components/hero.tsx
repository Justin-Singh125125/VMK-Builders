import { Button } from '../ui/button';
import { Link } from '../ui/link';
import { Typography } from '../ui/typography';

export const Hero = () => {
  return (
    <div className="w-full h-[500px] relative">
      <iframe
        className="absolute w-full h-full"
        src="https://www.youtube.com/embed/MKKhXavH1v4?si=ZkkdwCeQQsjFTW2m"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <div className="absolute flex justify-center items-center w-full h-full flex-col">
        <Typography variant="h1" className="text-common-white font-bold">
          Quality Comes First.
        </Typography>

        <Link href="#contact-us">
          <Button>Request An Estimate</Button>
        </Link>
      </div>
    </div>
  );
};
