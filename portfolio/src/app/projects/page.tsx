import Image from "next/image";
import ProjectBlock from "../components/projectblock";

export default function Projects() {
  return (
    <div>
      <h1>Hobbyprojekt</h1>
      <div className="subtitle">Här är några utvalda projekt jag har arbetet med för skojs skull!</div>
      <div className="projects">

        <ProjectBlock
          title="Github"
          name=""
          years=""
          link="https://github.com/carlmarkegang"
          image=""
          description="På Github finns det en stor mängd projekt som jag har skapat. Allt ifrån att testa något framework till användbara verktyg, spel och webbappar." />

        <ProjectBlock
          title="Spelutveckling"
          name="" years=""
          description="En av mina hobbies är att utveckla mindre spel. Här kan du se några som jag har jobbat med."
          link="https://carlmarkegang.itch.io/"
          image="" />

        <ProjectBlock
          title="CodePen"
          name=""
          years=""
          description="Experiment skrivna i kod"
          link="https://codepen.io/carlmarkegang"
          image="" />
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/contact">Kontakt</a>
      </div>
    </div>
  );
}
