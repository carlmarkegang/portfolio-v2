import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mina arbetslivserfarenheter!</h1>
      <div className="subtitle">
      Under mina 9 år inom utveckling och tech har jag varit väldigt öppen för att testa på olika teknologier och frameworks.<br />
      Har för det mesta jobbat som fullstack där jag har haft ansvar för både frontend och backend.<br/><br />

      Några teknologierna som jag har mest arbetserfarenhet av är: SQL, PHP, C#, ASP.NET, Javascript, jQuery.


      </div>

      <div className="projects">
      <ProjectBlock title="Fullstack-utvecklare" name="DPJ Workspace" years="2022 - nu" 
      description="Fullstack utvecklare hos DPJ Workspace Teknik PHP PrestaShop JavaScript jQuery Sass" 
      link="" image=""/>
      <ProjectBlock title="Utvecklare" name="InfoSolutions Sverige AB" years="2019 - 2022" description="Utvecklare hos InfoSolutions. Teknik ASP.NET C# VB MSSQL JavaScript jQuery WordPress" link="" image=""/>
      <ProjectBlock title="Application Specialist" name="Linas Matkasse" years="2016 - 2018" description="Framför allt backend-utvecklare för Linas Matkasses interna business-system. Men även engagerad i frontendarbete för kundriktade sidor, teknisk support m.m. Årets Anstäld 2017. Teknik: PHP Symfony Shell MySQL JavaScript jQuery Docker WordPress" link="" image=""/>
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/projects">projekt</a>
      </div>
    </div>
  );
}


