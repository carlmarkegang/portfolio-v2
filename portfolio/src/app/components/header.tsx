import Image from "next/image";
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>Carl Markegång</div> 
      <nav> 
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}