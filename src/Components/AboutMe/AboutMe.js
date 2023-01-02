import profile from '../../profile.jpeg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="profile-section" id="aboutMe">
            <img src={profile} alt="Harjinder's pic" className="profile-pic"/>
            <div className="bio">
                <h1>Full Stack Developer</h1>
                <p className="bio-detail">4.5 years of experience working with JavaScript, NodeJS, Angular, React, Ruby and many modern languages. Advance level experience working with SQL and NoSQL databases. Worked with major web development frameworks like Ruby on Rails and Django. Post Graduate Diploma in Cloud Computing for Big Data with experience deploying applications to AWS, GCP and Azure and managing cloud resources. Significant experience using CI\CD pipelines.</p>
            </div>
        </section>
    )
}

export default AboutMe;