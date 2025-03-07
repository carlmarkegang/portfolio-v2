import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>

      <div className="contact">
        <p>carl@markegang.se</p>
        <p>070-204 64 16</p>
        <p>Eller ett meddelande på LinkedIn</p>
        <p>
          <a href="https://github.com/carlmarkegang">
          <Image src="/github.png" alt="Github" width={180} />
          </a>
          <a href="https://www.linkedin.com/in/carl-markeg%C3%A5ng-b41971101/">
          <Image src="/linkedin.png" alt="Linkedin" width={180} />
          </a>
        </p>
      </div>
    </div>
  );
}
