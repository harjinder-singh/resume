import './Skills.css';
import Skill from '../Skill/Skill';

let skills = [
    { id: 1, skill: "JavaScript", type: "language", stars: 3 },
    { id: 2, skill: "ReactJs", type: "framework", stars: 3 },
    { id: 3, skill: "Angular2+", type: "framework", stars: 3 },
    { id: 4, skill: "TypeScript", type: "language", stars: 3 },
    { id: 5, skill: "NodeJs", type: "language", stars: 2 },
    { id: 6, skill: "HTML", type: "language", stars: 3 },
    { id: 7, skill: "CSS", type: "language", stars: 2 },
    { id: 8, skill: "Ruby", type: "language", stars: 2 },
    { id: 9, skill: "RestApi's", type: "service", stars: 3 },

]

const Skills = () => {

    const getSkills = () => {
        return (
            <>
                { skills.map((el) => <Skill key={el.id} label={el.skill} score={el.stars} /> ) }
            </>
        )
    } 

    return (
        <section className="skills-section" id="skills">
            <h1>Skills</h1>
            <hr />
            <div className="skills-content">
                {getSkills()}
            </div>
        </section>
    )
}

export default Skills;