import './Skills.css';
import Skill from '../Skill/Skill';

let skills = [
    { id: 1, skill: "ReactJs", stars: 3 },
    { id: 2, skill: "Angular2+", stars: 3 },
    { id: 3, skill: "NodeJs", stars: 2 },
    { id: 4, skill: "JavaScript", stars: 4 }
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
        <section className="skills-section">
            <h1>Skills</h1>
            <hr></hr>
            <div className="skills-content">
                {getSkills()}
            </div>
        </section>
    )
}

export default Skills;