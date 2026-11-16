import "./Skill.css";

const LEVELS = ["", "Familiar", "Proficient", "Expert"];
const MAX_SCORE = 3;

const Skill = ({ label, score }) => (
  <li className="skill" title={`${label}: ${LEVELS[score]}`}>
    <span className="skill-label">{label}</span>
    <span className="skill-meter" aria-label={LEVELS[score]}>
      {Array.from({ length: MAX_SCORE }, (_, index) => (
        <span
          key={index}
          className={`skill-bar ${index < score ? "filled" : ""}`}
        />
      ))}
    </span>
  </li>
);

export default Skill;
