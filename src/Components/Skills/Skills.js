import { Braces, Diagram3, Database, Window } from "react-bootstrap-icons";
import "./Skills.css";
import Skill from "../Skill/Skill";

const skills = [
  { id: 1, skill: "ReactJs", type: "framework", stars: 3 },
  { id: 2, skill: "Angular2+", type: "framework", stars: 3 },
  { id: 3, skill: "Spring", type: "framework", stars: 2 },
  { id: 4, skill: "JavaScript", type: "language", stars: 3 },
  { id: 5, skill: "TypeScript", type: "language", stars: 3 },
  { id: 6, skill: "NodeJs", type: "language", stars: 2 },
  { id: 7, skill: "Python", type: "language", stars: 2 },
  { id: 8, skill: "Java", type: "language", stars: 2 },
  { id: 9, skill: "HTML", type: "language", stars: 3 },
  { id: 10, skill: "CSS", type: "language", stars: 2 },
  { id: 11, skill: "Ruby", type: "language", stars: 2 },
  { id: 12, skill: "RestApi's", type: "service", stars: 3 },
  { id: 13, skill: "DynamoDB", type: "database", stars: 3 },
  { id: 14, skill: "MongoDB", type: "database", stars: 3 },
  { id: 15, skill: "Express", type: "library", stars: 2 },
];

const groups = [
  { title: "Languages", icon: Braces, types: ["language"] },
  { title: "Frameworks & Libraries", icon: Window, types: ["framework", "library"] },
  { title: "APIs & Services", icon: Diagram3, types: ["service"] },
  { title: "Databases", icon: Database, types: ["database"] },
];

const Skills = () => (
  <section className="section" id="skills">
    <div className="section-header reveal">
      <span className="section-eyebrow">What I work with</span>
      <h2 className="section-title">Skills &amp; Technologies</h2>
    </div>
    <div className="skills-grid">
      {groups.map(({ title, icon: Icon, types }) => (
        <article key={title} className="card skill-group reveal">
          <header className="skill-group-header">
            <span className="skill-group-icon">
              <Icon size={20} />
            </span>
            <h3>{title}</h3>
          </header>
          <ul className="skill-list">
            {skills
              .filter((el) => types.includes(el.type))
              .sort((a, b) => b.stars - a.stars)
              .map((el) => (
                <Skill key={el.id} label={el.skill} score={el.stars} />
              ))}
          </ul>
        </article>
      ))}
    </div>
    <p className="skills-legend reveal">
      <span className="skill-meter">
        <span className="skill-bar filled" />
        <span className="skill-bar filled" />
        <span className="skill-bar filled" />
      </span>
      Expert
      <span className="skill-meter">
        <span className="skill-bar filled" />
        <span className="skill-bar filled" />
        <span className="skill-bar" />
      </span>
      Proficient
    </p>
  </section>
);

export default Skills;
