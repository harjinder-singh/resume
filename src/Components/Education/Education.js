import { Mortarboard } from "react-bootstrap-icons";
import "./Education.css";

const degrees = [
  {
    degree: "P.G. Diploma in Cloud Computing for Big Data",
    school: "Lambton College",
    location: "Toronto, ON, Canada",
    year: "2020",
  },
  {
    degree: "Bachelors in Computer Science Engineering",
    school: "PTU",
    location: "Ferozepur, Punjab, India",
    year: "2013",
  },
];

const Education = () => (
  <section className="section" id="education">
    <div className="section-header reveal">
      <span className="section-eyebrow">Background</span>
      <h2 className="section-title">Education</h2>
    </div>
    <div className="education-grid">
      {degrees.map((item) => (
        <article key={item.degree} className="card education-card reveal">
          <div className="education-top">
            <span className="education-icon">
              <Mortarboard size={22} />
            </span>
            <span className="education-year">{item.year}</span>
          </div>
          <h3>{item.degree}</h3>
          <p className="education-school">{item.school}</p>
          <p className="education-location">{item.location}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
