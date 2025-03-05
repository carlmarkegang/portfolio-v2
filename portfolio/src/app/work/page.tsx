import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mina arbetslivserfarenheter!</h1>
      <div className="subtitle">
      Beskrivning
      </div>

      <div className="projects">
      <ProjectBlock title="Fullstack-utvecklare" name="DPJ Workspace" years="2022 - nu" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus risus, blandit egestas orci a, porta facilisis ipsum. Pellentesque convallis dolor nec dui ultrices, sit amet malesuada nibh vestibulum. Donec mollis molestie aliquam. Ut viverra nulla non diam vulputate dignissim. Integer dignissim lacinia augue. Nulla iaculis ex nec viverra posuere. Pellentesque sagittis rhoncus justo, quis sollicitudin libero vulputate at. Etiam dignissim malesuada quam, quis malesuada ligula euismod vitae. Vestibulum accumsan ultrices purus sit amet porttitor." 
      link="" image=""/>
      <ProjectBlock title="Utvecklare" name="InfoSolutions Sverige AB" years="jan. 2019 - juli 2022" description="Test" link="" image=""/>
      <ProjectBlock title="Application Specialist" name="Linas Matkasse" years="jan. 2016 - dec. 2018" description="Test" link="" image=""/>
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/projects">projekt</a>
      </div>
    </div>
  );
}


