import "../App.css";

function SkillLevel({ level }) {
  let width = level + "%";

  if (level == 0) {
    width = 0;
  }

  return (
    <div className="skillLevel-outer">
      <div className="skillLevel-inner" style={{ width: width }}>
        <p className="skillLevel-text">{level}</p>
      </div>
    </div>
  );
}

export default SkillLevel;
