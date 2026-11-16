import { Briefcase } from "react-bootstrap-icons";
import "./Experience.css";

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "Infosys",
    location: "Canada",
    period: "Nov 2022 – Present",
    current: true,
  },
  {
    role: "Senior Software Engineer",
    company: "Epam Systems",
    location: "Canada",
    period: "Jun 2021 – Sep 2022",
  },
  {
    role: "Full Stack Software Developer",
    company: "Distapps Inc.",
    location: "Canada",
    period: "Sep 2020 – Jun 2021",
  },
  {
    role: "Software Engineer",
    company: "Enbake Consulting Pvt. Ltd",
    location: "India",
    period: "Jun 2013 – Mar 2019",
  },
];

const Experience = () => (
  <section className="section" id="experience">
    <div className="section-header reveal">
      <span className="section-eyebrow">Career</span>
      <h2 className="section-title">Work Experience</h2>
    </div>
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={job.company} className="timeline-item reveal">
          <span className={`timeline-dot ${job.current ? "current" : ""}`}>
            <Briefcase size={14} />
          </span>
          <article className="card timeline-card">
            <div className="timeline-meta">
              <span className="timeline-period">{job.period}</span>
              {job.current && <span className="tag">Current</span>}
            </div>
            <h3>{job.role}</h3>
            <p className="timeline-company">
              {job.company} · {job.location}
            </p>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
