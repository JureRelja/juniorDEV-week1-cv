import Header from "./Header";
import TemplateBox from "./TemplateBox";
import DataTemplate from "./DataTemplate";
import SkillBox from "./SkillBox";
import "../App.css";

function Zivotopis() {
  return (
    <div className="zivotopis">
      <div className="container">
        <Header />
        <TemplateBox heading="Opći podaci">
          <DataTemplate property="Datum rođenja:" value="26.11.2003." />
          <DataTemplate
            property="Adresa:"
            value="Put željezničke stanice 5, 22320 Drniš"
          />
          <DataTemplate property="Kontakt:" value="0912345678" />
        </TemplateBox>
        <TemplateBox heading="Sposobnosti">
          <SkillBox skill="HTML:" level="99" />
          <SkillBox skill="CSS:" level="91" />
          <SkillBox skill="JavaScript:" level="85" />
          <SkillBox skill="React JS:" level="75" />
          <SkillBox skill="Node JS:" level="55" />
          <SkillBox skill="Python:" level="85" />
        </TemplateBox>
      </div>
    </div>
  );
}

export default Zivotopis;
