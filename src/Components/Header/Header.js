import { useEffect, useState } from "react";
import { List, MoonStars, Sun, X } from "react-bootstrap-icons";
import useTheme from "../../hooks/useTheme";
import "./Header.css";

const links = [
  { href: "#aboutMe", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#aboutMe");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const current = links
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 120);
      if (current) setActive(`#${current.id}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <a href="#aboutMe" className="brand" onClick={closeMenu}>
          <span className="brand-mark">HS</span>
          <span className="brand-name">Harjinder Singh</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? "active" : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
          </button>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
