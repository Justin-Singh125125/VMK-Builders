import { Link } from '../ui/link';
import { Typography } from '../ui/typography';

export const Navbar = () => {
  return (
    <nav className="bg-primary-400 p-4 pb-5 gap-4 flex justify-center relative max-md:flex-col">
      <Link href="/" className="absolute no-underline max-md:static">
        <Typography variant="h3" className="text-center">
          VMK Builders & CO
        </Typography>
      </Link>
      <div className="flex gap-4 justify-end w-full max-md:justify-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};
