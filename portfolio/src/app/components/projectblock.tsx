import Image from "next/image";
import Link from 'next/link';


interface ProjectBlockProps {
  name: string;
  years: string;
  description: string;
  image: string;
}

export default function ProjectBlock({ name, years, description, image }: ProjectBlockProps) {

  return (
    <div className="projectblock">
    <h2>{name}</h2>
    <div className="projectblockyears">{years}</div>
    <div>{description}</div>
  </div>
  );
}