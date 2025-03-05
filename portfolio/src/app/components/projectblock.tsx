import Image from "next/image";
import Link from 'next/link';


interface ProjectBlockProps {
  title: string;
  name: string;
  years: string;
  description: string;
  image: string;
}

export default function ProjectBlock({ title, name, years, description, image }: ProjectBlockProps) {

  return (
    <div className="projectblock">
      <h2>{title}</h2>
      <h3>{name}</h3>
      <div className="projectblockyears">{years}</div>
      <div>{description}</div>
    </div>
  );
}