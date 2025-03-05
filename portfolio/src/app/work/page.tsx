import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mitt arbete!</h1>

      <div className="projects">
      <ProjectBlock name="DPJ Workspace" years="2023 - nu" description="Test" image=""/>

      </div>

      <div>
        Mina projekt: <a href="/project">Projekt</a>
      </div>
    </div>
  );
}


