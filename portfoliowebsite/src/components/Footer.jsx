// src/components/Footer.jsx
import {
  GitHub,
  LinkedIn,
  Twitter,
  Mail,
  ArrowUpward,
} from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-white py-3 position-relative">
      <div className="container">
        {/* Top Row - Social Links */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h5 className="mb-3">Let's connect and build something amazing!</h5>
            <div className="social-links d-flex justify-content-center gap-4">
              <a
                href="https://github.com/kidehae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-grow"
                aria-label="GitHub"
              >
                <GitHub fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/meaza-tale-176780301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-grow"
                aria-label="LinkedIn"
              >
                <LinkedIn fontSize="large" />
              </a>
              <a
                href="https://x.com/meaza_mula89381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover-grow"
                aria-label="Twitter"
              >
                <Twitter fontSize="large" />
              </a>
              <a
                href="mailto:meazatale5@gmail.com"
                className="text-white hover-grow"
                aria-label="Email"
              >
                <Mail fontSize="large" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} My Portfolio. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary rounded-circle position-fixed bottom-3 end-3 d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px", zIndex: 1000 }}
          aria-label="Back to top"
        >
          <ArrowUpward fontSize="medium" />
        </button>
      )}

      <style jsx>{`
        .hover-grow {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .hover-grow:hover {
          transform: scale(1.2);
          color: rgb(58, 60, 62) !important;
        }
        footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        h5 {
          font-weight: 300;
          letter-spacing: 0.5px;
        }
      `}</style>
    </footer>
  );
}
