import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>

      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </header>
  );
}
