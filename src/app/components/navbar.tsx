import { Link } from '../ui/link';
import { Typography } from '../ui/typography';

export const Navbar = () => {
  return (
    <nav className="bg-primary-400 p-4 pb-5 gap-4 flex justify-center relative">
      <Link href="/" className="absolute no-underline">
        <Typography variant="h3">VMK Builders & CO</Typography>
      </Link>
      <div className="flex gap-4 justify-end w-full">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};
