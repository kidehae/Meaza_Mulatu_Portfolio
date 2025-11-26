// // src/components/Home.jsx
// import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
// import React from "react";
// import photo from "../assets/mypic.jpg"; // Placeholder for profile image

// export default function Home() {
//   return (
//     <section id="home" className="text-center py-5">
//       <div className="container my-5">
//         <div className="home-content fade-in">
//           <img
//             src={photo}
//             alt="Profile"
//             className="profile-img img-fluid mb-4"
//           />
//           <h1 className="display-4 fw-bold mb-3">Meaza Mulatu Tale</h1>
//           <h2 className="h4 mb-4">Full stack developer</h2>
//           <p className="lead mb-5">
//             React frontend artisan and Node.js backend engineer—building
//             complete solutions from pixel to server.
//           </p>

//           <div className="social-icons d-flex justify-content-center gap-4">
//             <a
//               href="https://github.com/kidehae"
//               className="social-icon"
//               target="_blank"
//             >
//               <GitHub fontSize="large" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/meaza-tale-176780301/"
//               target="_blank"
//               className="social-icon"
//             >
//               <LinkedIn fontSize="large" />
//             </a>
//             <a
//               href="https://x.com/meaza_mula89381"
//               className="social-icon"
//               target="_blank"
//             >
//               <Twitter fontSize="large" />
//             </a>
//             <a
//               href="mailto:meazatale5@gmail.com"
//               className="social-icon"
//               target="_blank"
//             >
//               <Email fontSize="large" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Home.jsx
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Download,
} from "@mui/icons-material";
import React from "react";
import photo from "../assets/mypic.jpg";
import Resume from "../assets/Resume.pdf";
export default function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Meaza_Mulatu_Tale_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="text-center py-5">
      <div className="container my-5">
        <div className="home-content fade-in">
          <img
            src={photo}
            alt="Profile"
            className="profile-img img-fluid mb-4"
          />
          <h1 className="display-4 fw-bold mb-3">Meaza Mulatu Tale</h1>
          <h2 className="h4 mb-4">Full stack developer</h2>
          <p className="lead mb-5">
            React frontend artisan and Node.js backend engineer—building
            complete solutions from pixel to server.
          </p>
          <div className="mb-5">
            <button
              onClick={downloadResume}
              className="btn btn-primary btn-lg d-flex align-items-center gap-2 mx-auto"
              style={{
                padding: "10px 20px",
                fontSize: "1.1rem",
                fontWeight: "700",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#ffffff",
                color: "black",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#89898aff")
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              <Download />
              Download Resume
            </button>
          </div>
          <div className="social-icons d-flex justify-content-center gap-4">
            <a
              href="https://github.com/kidehae"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/meaza-tale-176780301/"
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://x.com/meaza_mula89381"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="mailto:meazatale5@gmail.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
