import { Heart, HeartFill } from 'react-bootstrap-icons';

const Skill = ({id, label, score}) => {

    const getHearts = () =>{
        return (
            <>
                { Array(score).fill(0).map((el, index) => <span key={`${id}-${index}`}><HeartFill color="purple" size="20"/></span>)}
                { Array(4 - score).fill(0).map((el, index) => <span key={`${index}-${id}`}><Heart color="purple" size="20"/></span>)}
            </>
        )
    }
    return (
        <div className="skill">
            <p className="skill-label">{label}</p>
            {getHearts()}
        </div>
    )
}

export default Skill;