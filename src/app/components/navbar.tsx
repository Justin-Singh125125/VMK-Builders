import { Link } from '../ui/link';
import Image from 'next/image';
import { Typography } from '../ui/typography';
import Logo from './logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-primary-400 p-4 pb-5 h-[120px] gap-4 flex justify-center relative max-md:flex-col">
      <Link href="/" className="no-underline max-md:static absolute">
        <Image src={Logo} width={500} height={500} alt="Picture of the author" />
      </Link>
      <div className="flex gap-4 justify-end w-full max-md:justify-center">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};
