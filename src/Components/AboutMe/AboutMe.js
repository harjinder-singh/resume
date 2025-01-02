import profile from "../../profile.jpeg";
import "./AboutMe.css";
import moment from "moment";

const AboutMe = () => {
  const getExperience = () => {
    //Enbake exp
    let startDate = moment([2013, 6, 1]);
    let endDate = moment([2019, 3, 15]);
    let diff = new moment.duration(endDate.diff(startDate));

    //Rest Exp
    startDate = moment([2020, 6, 8]);
    endDate = moment(Date.now());
    diff += new moment.duration(endDate.diff(startDate));

    const totalMonths = Math.floor(new moment.duration(diff).asMonths());
    const years = Math.floor(totalMonths / 12);
    const months = Math.floor(totalMonths % 12);
    return months > 0
      ? `${years} years and ${months} months`
      : `${years} years`;
  };
  return (
    <section className="profile-section" id="aboutMe">
      <img src={profile} alt="Harjinder's pic" className="profile-pic" />
      <div className="bio">
        <h1>Full Stack Software Developer</h1>
        <p className="bio-detail">
          {getExperience()} of experience working with JavaScript, NodeJS,
          Angular, React, Python, Java and many modern languages. Advance level
          experience working with SQL and NoSQL databases. Worked with major web
          development frameworks like Spring, Springboot, and Ruby on Rails.
          Post Graduate Diploma in Cloud Computing for Big Data with experience
          deploying applications to AWS, GCP and Azure and managing cloud
          resources. Significant experience using CI\CD pipelines.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
