import "./Skills.css";
import Skill from "../Skill/Skill";

let skills = [
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

const Skills = () => {
  const getSkills = () => {
    return (
      <>
        {skills.map((el) => (
          <Skill key={el.id} label={el.skill} score={el.stars} />
        ))}
      </>
    );
  };

  return (
    <section className="skills-section" id="skills">
      <h1>Skills</h1>
      <hr />
      <div className="skills-content">{getSkills()}</div>
    </section>
  );
};

export default Skills;
