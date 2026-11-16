import { ArrowRight, Envelope, Github, GeoAlt } from "react-bootstrap-icons";
import moment from "moment";
import profile from "../../profile.jpeg";
import "./AboutMe.css";

const getExperience = () => {
  //Enbake exp
  let diff = moment([2019, 3, 15]).diff(moment([2013, 6, 1]));
  //Rest Exp
  diff += moment(Date.now()).diff(moment([2020, 6, 8]));

  const totalMonths = Math.floor(moment.duration(diff).asMonths());
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
};

const AboutMe = () => {
  const { years, months } = getExperience();
  const plural = (count, unit) => `${count} ${unit}${count === 1 ? "" : "s"}`;
  const experienceText =
    months > 0
      ? `${plural(years, "year")} and ${plural(months, "month")}`
      : plural(years, "year");

  const stats = [
    { value: `${years}+`, label: "Years experience" },
    { value: "4", label: "Companies" },
    { value: "3", label: "Cloud platforms" },
  ];

  return (
    <section className="hero" id="aboutMe">
      <div className="hero-content reveal">
        <span className="hero-badge">
          <span className="pulse-dot" /> Senior Software Engineer @ Infosys
        </span>
        <h1 className="hero-title">
          Hi, I'm Harjinder.
          <br />
          <span className="gradient-text">Full Stack Software Developer</span>
        </h1>
        <p className="hero-location">
          <GeoAlt /> Canada
        </p>
        <p className="hero-bio">
          {experienceText} of experience working with JavaScript, NodeJS,
          Angular, React, Python, Java and many modern languages. Advanced
          experience with SQL and NoSQL databases and major web frameworks like
          Spring, Spring Boot and Ruby on Rails. Post Graduate Diploma in Cloud
          Computing for Big Data, with hands-on experience deploying to AWS, GCP
          and Azure and building CI/CD pipelines.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <Envelope /> Get in touch
          </a>
          <a href="#experience" className="btn btn-ghost">
            View experience <ArrowRight />
          </a>
          <a
            href="https://github.com/harjinder-singh"
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github /> GitHub
          </a>
        </div>
        <dl className="hero-stats">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat">
              <dt className="gradient-text">{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero-visual reveal">
        <div className="profile-ring">
          <img src={profile} alt="Harjinder Singh" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
