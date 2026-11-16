import { ArrowRight, Envelope, Github, GeoAlt } from "react-bootstrap-icons";
import moment from "moment";
import profile from "../../profile.jpeg";
import jobs from "../../data/jobs";
import "./AboutMe.css";

const getExperience = () => {
  const workedMonths = new Set();
  jobs.forEach(({ start, end }) => {
    const endDate = end ? moment(end) : moment();
    for (const m = moment(start); !m.isAfter(endDate, "month"); m.add(1, "month")) {
      workedMonths.add(m.format("YYYY-MM"));
    }
  });
  const totalMonths = workedMonths.size;
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
    { value: `${jobs.length}`, label: "Companies" },
    { value: "3", label: "Cloud platforms" },
  ];

  return (
    <section className="hero" id="aboutMe">
      <div className="hero-content reveal">
        <span className="hero-badge">
          <span className="pulse-dot" /> Building AI products @ {jobs[0].company}
        </span>
        <h1 className="hero-title">
          Hi, I'm Harjinder.
          <br />
          <span className="gradient-text">Full Stack &amp; AI Software Engineer</span>
        </h1>
        <p className="hero-location">
          <GeoAlt /> Canada
        </p>
        <p className="hero-bio">
          Software engineer with {experienceText} of experience building
          production web applications end to end, now focused on AI. At{" "}
          {jobs[0].company} I work on AI projects, bringing large language
          models into real products. My toolkit spans JavaScript, TypeScript,
          React, Angular, Node.js, Python and Java, plus SQL and NoSQL databases
          and frameworks like Spring Boot and Ruby on Rails. I also hold a Post
          Graduate Diploma in Cloud Computing for Big Data and have shipped on
          AWS, GCP and Azure with CI/CD pipelines.
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
