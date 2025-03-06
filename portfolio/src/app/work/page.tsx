import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mina arbetslivserfarenheter!</h1>
      <div className="subtitle">
        Under mina 9 år inom utveckling och tech har jag varit väldigt öppen för att testa på olika teknologier och frameworks.<br />
        Jag har framför allt jobbat som fullstack där jag har haft ansvar för både frontend och backend.<br /><br />

        Några teknologierna som jag har mest arbetserfarenhet av är: Javascript, SQL, PHP, C#, ASP.NET, jQuery.


      </div>

      <div className="projects">
        <ProjectBlock
          title="Fullstack-utvecklare"
          name="DPJ Workspace"
          years="2022 - nu"
          link=""
          image=""
          tags={["PHP", "PrestaShop", "Symfony", "JavaScript", "jQuery", "Sass", "MariaDB"]}
          description="Fullstack utvecklare hos DPJ Workspace.<br><br>
          Hos DPJ Workspace jobbade jag med kundriktade sidor för försäljning av kontorsmöbler.<br>
          Vi jobbade med en designer som tog fram design i Adobe InDesign som vi införde på hemsidan. Det kunde ske genom att vi utvecklade Moduler vilket är en del av PrestaShops sätt att hantera tillägg via Symfony, PHP, Smarty, CSS, Javascript, jQuery. Det kunde också ske genom att modifera eller skapa controllers och templates.<br><br>
          Några av de större projekten och mer intressant projekten jag jobbade med var:<br>
          Brizley - Skapade en hemsida i Symfony med ett egenbyggt adminsystem för att enkelt kunna redigera texter och produkter och ett Frontend med Symfony controllers och htmx.<br>
          Spåra order - tog fram en sida för att spåra ordrar som var kopplad till Visma." />

        <ProjectBlock
          title="Utvecklare"
          name="InfoSolutions Sverige AB"
          years="2019 - 2022"
          link=""
          image=""
          tags={["ASP.NET", "C#", "VB", "WebView2", "MSSQL", "JavaScript", "XML", "jQuery", "WordPress"]}
          description='Utvecklare hos InfoSolutions. <br><br>
          InfoSolutions är ett företag som arbetar med vårddigitalisering, t.ex i kommunikation mellan sjukhus och labb eller erbjöd webbaserade lösningar som t.ex LabPortalen.
          Hos InfoSolutions hade jag ansvar för att utveckla och underhålla flera större webbaserade system som användes av vårdsektorn t.ex Röntgenportalen, "TimeReport" (det interna systemet för att rapportera tid och fakturera som jag utvecklade i c# razor), LabPortalen, eRemiss, Medicinska studier, konverteringsflöden mellan olika labb och sjukhus, Connect och fler. Dessa system hade även interna support program som var skrivna i Windows Forms (VB.NET) för att t.ex kunna administrera organisationer, logga in som en användare i system m.m.<br>
          Vi jobbade i Microsoft miljöer med Windows Server, MSSQL med stored procedures och IIS.<br><br>
          En rolig detail från InfoSolutions var att jag, tillsammans med flera projektledare från InfoSolutions och Folkhälsomyndigheterna utvecklade ett av de tidigare formulär (kanske första i Sverige) som användes av vårdpersonal för att spåra Covid-19 symtom!' />

        <ProjectBlock
          title="Application Specialist"
          name="Linas Matkasse"
          years="2016 - 2018"
          link=""
          image=""
          tags={["PHP", "Symfony", "Shell", "MySQL", "JavaScript", "jQuery", "WordPress", "Docker", "WordPress"]}
          description='Framför allt en blanding av systemadministratör, teknisk support och backend-utvecklare för Linas Matkasses interna egenutvecklade business-system.<br>
          Men även engagerad i frontendarbete för kundriktade sidor vilket gjordes i Wordpress. <br><br>
          Linas Matkasse var väldigt snabbrörligt och det kunde ofta komma projekt och ändringar från olika håll.<br> 
          Så det gällde att planera sitt jobb väl och jobba snabbt vilket kunde vara väldigt kul och motiverade!<br><br>
          År 2017 fick jag utmärkelsen "Årets Anstäld"' />
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/projects">projekt</a>
      </div>
    </div>
  );
}


