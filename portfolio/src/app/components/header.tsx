"use client"
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <div><a href="/">Carl Markegång</a></div>
      <nav>
        <Link href="/" className={pathname == '/' ? 'active' : ''}>Hem</Link>
        <Link href="/work" className={pathname == '/work' ? 'active' : ''}>Arbete</Link>
        <Link href="/projects" className={pathname == '/projects' ? 'active' : ''}>Projekt</Link>
        <Link href="/contact" className={pathname == '/contact' ? 'active' : ''}>Kontakt</Link>
      </nav>
    </header>
  );
}