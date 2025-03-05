import Image from "next/image";
import Link from 'next/link';


interface ProjectBlockProps {
  title: string;
  name: string;
  years: string;
  description: string;
  link: string;
  image: string;
}

export default function ProjectBlock({ title, name, years, description, link, image }: ProjectBlockProps) {

  return (
    <div className="projectblock">
      <div className="title">{title}</div>
      <div className="name">{name}</div>
      <div className="years">{years}</div>
      <div className="description">{description}</div>
      <div className="link"><a href={link}>{link}</a></div>
    </div>
  );
}