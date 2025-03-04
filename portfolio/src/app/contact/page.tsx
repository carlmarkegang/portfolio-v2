import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the projects page!</p>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
    </div>
  );
}
