import Image from "next/image";
import Link from 'next/link';


interface ProjectBlockProps {
  title: string;
  name: string;
  years: string;
  description: string;
  link: string;
  image: string;
  tags?: string[];
}

export default function ProjectBlock({ title, name, years, description, link, image, tags = [] }: ProjectBlockProps) {

  const formatDescription = (description: string) => {
    return description.split("<br>").map((line, index) => (
      <div key={index}>
        {line}
        {index !== description.split("\n").length - 1}
        <br />
      </div>
    ));
  };

  return (
    <div className="projectblock">
      <div className="title">{title}</div>
      <div className="name">{name}</div>
      <div className="years">{years}</div>
      <div className="description">{formatDescription(description)}</div>
      <div className="link"><a href={link} target="_blank">{link}</a></div>
      <div className="tags">
        {tags.length > 0 && tags.map((tag, index) => (
          <div key={index} className="tag">{tag}</div>
        ))}
      </div>
    </div>
  );
}