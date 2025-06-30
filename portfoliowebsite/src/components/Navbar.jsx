// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, Close } from "@mui/icons-material";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand fw-bold cursor-pointer"
        >
          My Portfolio
        </Link>

        <button
          className="navbar-toggler cursor-pointer"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <Close /> : <Menu />}
        </button>

        <div
          className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* This ensures consistent pointer cursor for all interactive elements */
        .navbar a,
        .navbar button {
          cursor: pointer;
        }
        /* Optional: Add hover effects */
        .nav-link:hover {
          color: rgb(34, 40, 49) !important;
        }
        .navbar-brand:hover {
          opacity: 0.8;
        }
      `}</style>
    </nav>
  );
}
