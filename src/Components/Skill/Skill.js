import { Heart, HeartFill } from 'react-bootstrap-icons';
import './Skill.css';

const Skill = ({id, label, score}) => {

    const getHearts = () =>{
        return (
            <>
                { Array(score).fill(0).map((el, index) => <span key={`${id}-${index}`}><HeartFill color="purple" size="20"/></span>)}
                { Array(3 - score).fill(0).map((el, index) => <span key={`${index}-${id}`}><Heart color="purple" size="20"/></span>)}
            </>
        )
    }
    return (
        <div className="skill">
            <p className="skill-label">{label}</p>
            <div className="skill-value">
                {getHearts()}
            </div>
        </div>
    )
}

export default Skill;