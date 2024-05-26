import { Link } from '../ui/link';

export const Navbar = () => {
  return (
    <nav className="bg-primary-400 p-4 gap-4 flex justify-center relative">
      <Link href="/" className="absolute">
        <h1>VMK Builders & CO</h1>
      </Link>
      <div className="flex gap-4 justify-end w-full">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
};
