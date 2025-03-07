import Image from "next/image";

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>Welcome to the projects page!</p>
      <Image src="/next.svg" alt="Next.js logo"/>

      <div>
        Kontakta mig: <a href="/contact">Kontakt</a>
      </div>
    </div>
  );
}
