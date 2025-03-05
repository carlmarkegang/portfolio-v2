import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>

      <div className="contact">
        <div>carl@markegang.se</div>
        <div>070-204 64 16</div>
        <div>Eller ett meddelande på LinkedIn</div>
        <div>
          <a href="https://github.com/carlmarkegang">
            <Image src="/github.png" alt="Github" width={50} height={50} />
          </a>
          <a href="https://www.linkedin.com/in/carl-markeg%C3%A5ng-b41971101/">
            <Image src="/linkedin.png" alt="Linkedin" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
