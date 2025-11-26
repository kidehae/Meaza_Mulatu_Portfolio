// src/components/Projects.jsx
import {
  Language,
  Security,
  School,
  Forum,
  ShoppingCart,
  OndemandVideo,
  AutoStories,
  WbSunny,
  Assignment,
} from "@mui/icons-material";
import AIpoemGenerator from "../assets/AIPoemGenerator.png";
import AmazonClone from "../assets/AmazonClone.png";
import NetflixClone from "../assets/NetflixClone.png";
import EvangadiForum from "../assets/EvangadiForum.png";
import WeatherApp from "../assets/WeatherApp.png";
import TodoListApp from "../assets/TodoListApp.png";
import INSA from "../assets/INSA.png";
import DVS from "../assets/DVS.png";
import YRPS from "../assets/YRPS.png";

const projects = [
  {
    id: 1,
    title: "Youth Research Publication Platform",
    description:
      "An academic submission system enabling students to upload research papers for peer review, featuring automated rating, acceptance/rejection workflows, and publication management.",
    icon: <School fontSize="large" />,
    image: YRPS,
    tags: ["React", "Node", "Tailwind CSS", "PostgreSQL"],
    url: "https://yrps-deployment.vercel.app/",
  },
  {
    id: 2,
    title: "Developer Vulnerability Scanner",
    description:
      "A comprehensive Static Application Security Testing (SAST) tool that automatically scans source code for OWASP Top 10 vulnerabilities with detailed vulnerability reports and remediation guidance.",
    icon: <Security fontSize="large" />,
    image: DVS,
    tags: [
      "Python",
      "Fast API",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
    ],
    url: "https://github.com/mahi7000/Developer_Vulnerability_Scanner",
  },

  {
    id: 3,
    title: "INSA Website Clone",
    description:
      "A fully responsive clone of the INSA institutional website with enhanced UI/UX design, improved navigation, and optimized accessibility features using modern web technologies.",
    icon: <Language fontSize="large" />,
    image: INSA,
    tags: ["React", "Node", "Tailwind CSS", "PostgreSQL"],
    url: "https://insa-clone.vercel.app/",
  },
  {
    id: 4,
    title: "Evangadi Forum",
    description:
      "A full-stack Q&A discussion platform with real-time messaging, upvote/downvote system, JWT authentication, and threaded conversations for technical knowledge sharing.",
    icon: <Forum fontSize="large" />,
    image: EvangadiForum,
    tags: ["React", "Express", "JWT", "PostgreSQL"],
    url: "https://evangadi-forum-deployment-integrate.vercel.app/",
  },
  {
    id: 5,
    title: "Amazon E-commerce Clone",
    description:
      "Feature-complete e-commerce platform with Firebase authentication, real-time cart management, Stripe payment integration, and responsive product catalog.",
    icon: <ShoppingCart fontSize="large" />,
    image: AmazonClone,
    tags: ["React", "Firebase", "Material UI", "CSS", "Stripe"],
    url: "https://amazonmeazaclonetwo.netlify.app/",
  },
  {
    id: 6,
    title: "Netflix UI Clone",
    description:
      "Responsive streaming service interface with TMDB API integration, dynamic movie recommendations, and embedded YouTube trailer playback functionality.",
    icon: <OndemandVideo fontSize="large" />,
    image: NetflixClone,
    tags: ["React", "TMDB API", "YouTube API", "CSS"],
    url: "https://meazanetflexx.netlify.app/",
  },
  {
    id: 7,
    title: "AI Poem Generator",
    description:
      "Interactive web application leveraging AI algorithms to generate creative poetry in real-time based on user-provided themes or titles with customizable output styles.",
    icon: <AutoStories fontSize="large" />,
    image: AIpoemGenerator,
    tags: ["JavaScript", "HTML", "CSS", "AI"],
    url: "https://aipoemwriter.netlify.app/",
  },
  {
    id: 8,
    title: "Weather Forecast Application",
    description:
      "Comprehensive weather monitoring app with 5-day forecasts, geolocation services, interactive radar maps, and data visualization using Chart.js.",
    icon: <WbSunny fontSize="large" />,
    image: WeatherApp,
    tags: ["React", "Context API", "Geolocation", "Chart.js"],
    url: "https://myfirstshecodesweatherappp.netlify.app/",
  },
  {
    id: 9,
    title: "Task Management App",
    description:
      "Persistent task organizer with local storage integration, priority categorization, completion tracking, and cross-session data persistence.",
    icon: <Assignment fontSize="large" />,
    image: TodoListApp,
    tags: ["React", "LocalStorage", "CSS"],
    url: "https://myytodolistapp.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title mb-5">My Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden project-card">
                <div className="image-container">
                  <img
                    src={project.image}
                    className="project-image"
                    alt={project.title}
                  />
                  <div className="image-overlay">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-button"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="card-body text-center p-4">
                  <div className="icon-wrapper mb-3">{project.icon}</div>
                  <h3 className="h5 fw-bold mb-3">{project.title}</h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="technology-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
