import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div><a href="/">Carl Markegång</a></div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}