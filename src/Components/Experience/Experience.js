import { Briefcase } from "react-bootstrap-icons";
import moment from "moment";
import jobs from "../../data/jobs";
import "./Experience.css";

const formatDate = (date) => (date ? moment(date).format("MMM YYYY") : "Present");

const Experience = () => (
  <section className="section" id="experience">
    <div className="section-header reveal">
      <span className="section-eyebrow">Career</span>
      <h2 className="section-title">Work Experience</h2>
    </div>
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={job.company} className="timeline-item reveal">
          <span className={`timeline-dot ${job.end ? "" : "current"}`}>
            <Briefcase size={14} />
          </span>
          <article className="card timeline-card">
            <div className="timeline-meta">
              <span className="timeline-period">
                {formatDate(job.start)} – {formatDate(job.end)}
              </span>
              {!job.end && <span className="tag">Current</span>}
            </div>
            <h3>{job.role}</h3>
            <p className="timeline-company">
              {[job.company, job.location].filter(Boolean).join(" · ")}
            </p>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
