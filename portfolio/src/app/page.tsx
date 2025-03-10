import Image from "next/image";

export default function Homepage() {
  return (
    <div>
      <h1>Hej!</h1>
      <div className="subtitle">
        Välkommen till min hemsida!
        {/* Click here to view page English:  */}
      </div>

      <br />
      <div>
        <a href="/cv.pdf">Se mitt CV</a>
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/work">Arbetslivserfarenheter</a>
      </div>
    </div>
  );
}
