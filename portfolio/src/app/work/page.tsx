import Image from "next/image";
import ProjectBlock from "../components/projectblock";



export default function Work() {
  return (
    <div>
      <h1>Mina arbetslivserfarenheter!</h1>
      <div className="subtitle">
        Under mina 9 år inom utveckling och tech har jag varit väldigt öppen för att testa på olika teknologier och frameworks.<br />
        Jag är mer intresserad av slutmålet än hur jag kommer dit! :) <br /><br />
        Jag har framför allt jobbat som fullstack där jag har haft ansvar för både frontend och backend.<br /><br />

        Några av de teknologier jag har mest erfarenhet av: Git, Javascript, SQL, PHP, C#, ASP.NET, jQuery.<br />
        Jag är van att arbeta självständigt men trivs även i team.
      </div>

      <div>
        <a href="/cv.pdf" target="_blank">Se mitt CV som PDF</a>
      </div>

      <div className="projects">
        <ProjectBlock
          title="Fullstack-utvecklare"
          name="DPJ Workspace"
          years="2022 - nu"
          link=""
          image=""
          tags={["PHP", "PrestaShop", "Symfony", "JavaScript", "jQuery", "Sass", "MariaDB"]}
          description="Fullstack-utvecklare hos DPJ Workspace.<br><br>
          Som fullstack-utvecklare på DPJ Workspace ansvarade jag för att utveckla kundanpassade lösningar för försäljning av kontorsmöbler. <br>
          Jag arbetade nära designerteamet för att implementera visuella koncept från Adobe InDesign på vår e-handelsplattform. Detta inkluderade både utveckling av moduler inom PrestaShop, som använder Symfony, PHP, Smarty, CSS, Javascript och jQuery, samt anpassning av controllers och templates för att optimera användarupplevelsen.<br><br>
          Några av de mest intressanta och större projekten jag arbetade med inkluderar:<br>
          Brizley - Skapade en hemsida i Symfony med ett egenbyggt adminsystem för att enkelt kunna redigera texter och produkter och ett Frontend med Symfony controllers och htmx.<br>
          Spåra order - Tog fram en sida för att tillåta kunderna att spåra sina beställningar." />

        <ProjectBlock
          title="Utvecklare"
          name="InfoSolutions Sverige AB"
          years="2019 - 2022"
          link=""
          image=""
          tags={["ASP.NET", "C#", "VB", "WebView2", "MSSQL", "JavaScript", "XML", "jQuery", "WordPress"]}
          description='Utvecklare hos InfoSolutions. <br><br>
          InfoSolutions är ett företag som arbetar med vårddigitalisering, t.ex i kommunikation mellan sjukhus och labb eller erbjöd webbaserade lösningar som t.ex LabPortalen.<br><br>
          Hos InfoSolutions hade jag ansvar för att utveckla och underhålla flera större webbaserade system som användes av vårdsektorn t.ex Röntgenportalen, "TimeReport" (det interna systemet för att rapportera tid och fakturera som jag utvecklade i C# Razor), LabPortalen, eRemiss, Medicinska studier, konverteringsflöden mellan olika labb och sjukhus, Connect och fler. Jag jobbade även med de Labportalens interna supportprogram som var skrivna i Windows Forms (VB.NET) för att t.ex kunna administrera organisationer, logga in som en användare i system m.m.<br><br>
          Vi jobbade i Microsoft miljöer med Windows Server, MSSQL med stored procedures och IIS.<br><br>
          En rolig detalj från InfoSolutions var att jag, tillsammans med flera projektledare från InfoSolutions och Folkhälsomyndigheterna utvecklade ett av de tidigare formulär (kanske första i Sverige) som användes av vårdpersonal för att spåra Covid-19 symtom!' />

        <ProjectBlock
          title="Application Specialist"
          name="Linas Matkasse"
          years="2016 - 2018"
          link=""
          image=""
          tags={["PHP", "Symfony", "Shell", "MySQL", "JavaScript", "jQuery", "Docker", "WordPress"]}
          description='Hos Linas Matkasse jobbade jag som systemadministratör, teknisk support och backend-utvecklare för Linas Matkasses interna egenutvecklade business-system.<br>
          Men även engagerad i frontendarbete för kundriktade sidor.<br><br>
          Linas Matkasse var väldigt snabbrörligt och det kom ofta in projekt och ändringar från olika håll i organisationen.<br> 
          Så det gällde att planera sitt jobb väl och jobba snabbt vilket var väldigt kul och motiverade!<br><br>
          År 2017 fick jag utmärkelsen "Årets Anställd"' />
      </div>

      <div className="bottomnav">
        Gå vidare till <a href="/projects">projekt</a>
      </div>
    </div>
  );
}


