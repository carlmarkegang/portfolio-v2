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
        <a href="/" className={pathname == '/' ? 'active' : ''}>Hem</a>
        <a href="/work" className={pathname == '/work' ? 'active' : ''}>Arbete</a>
        <a href="/projects" className={pathname == '/projects' ? 'active' : ''}>Projekt</a>
        <a href="/contact" className={pathname == '/contact' ? 'active' : ''}>Kontakt</a>
      </nav>
    </header>
  );
}