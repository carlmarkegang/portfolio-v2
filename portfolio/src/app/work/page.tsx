import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mitt arbete!</h1>

      <div className="projects">
      <ProjectBlock title="Fullstack-utvecklare" name="DPJ Workspace" years="2022 - nu" description="Te<br>st" image=""/>
      <ProjectBlock title="Utvecklare" name="InfoSolutions Sverige AB" years="jan. 2019 - juli 2022" description="Test" image=""/>
      <ProjectBlock title="Application Specialist" name="Linas Matkasse" years="jan. 2016 - dec. 2018" description="Test" image=""/>

      </div>

      <div className="bottomnav">
        Mina projekt: <a href="/project">Projekt</a>
      </div>
    </div>
  );
}


