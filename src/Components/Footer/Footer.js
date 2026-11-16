import { ArrowUp, Github } from "react-bootstrap-icons";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <p>© {new Date().getFullYear()} Harjinder Singh. Built with React.</p>
      <div className="footer-links">
        <a
          href="https://github.com/harjinder-singh"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="icon-btn"
        >
          <Github size={16} />
        </a>
        <a href="#aboutMe" aria-label="Back to top" className="icon-btn">
          <ArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
