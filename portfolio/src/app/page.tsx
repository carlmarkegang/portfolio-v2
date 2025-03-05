import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <h1>Hej!</h1>
      <div>Click here to view page English: </div>

      <div className="bottomnav">
        Mina arbetslivserfarenheter: <a href="/work">Arbete</a>
      </div>
    </div>
  );
}
