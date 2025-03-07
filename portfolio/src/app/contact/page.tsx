import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div><span>Email:</span> carl@markegang.se</div>
        <div><span>Tel:</span> 070-204 64 16</div>
        <div><span>Linkedin:</span> <a href="https://www.linkedin.com/in/carl-markeg%C3%A5ng-b41971101/">Carl Markegang</a></div>
        <div><span>Github:</span> <a href="https://github.com/carlmarkegang">carlmarkegang</a></div>
        {/*
        <div>
          <a href="">
            <Image src="/github.png" alt="Github" width={50} height={50} />
          </a>
          <a href="https://www.linkedin.com/in/carl-markeg%C3%A5ng-b41971101/">
            <Image src="/linkedin.png" alt="Linkedin" width={50} height={50} />
          </a>
        </div>
        */}
      </div>
    </div>
  );
}
