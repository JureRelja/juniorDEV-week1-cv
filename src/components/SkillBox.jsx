import "../App.css";
import SkillLevel from "./SkillLevel";

export default function SkillBox({ skill, level }) {
  return (
    <div className="skillBox">
      <h2 className="text">{skill}</h2>
      <SkillLevel level={level} />
    </div>
  );
}
