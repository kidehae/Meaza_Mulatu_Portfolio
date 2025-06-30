// src/components/Projects.jsx
import Web from "@mui/icons-material/Web";
import PhoneAndroid from "@mui/icons-material/PhoneAndroid";
import DesignServices from "@mui/icons-material/DesignServices";
import Code from "@mui/icons-material/Code";
import Book from "@mui/icons-material/Book";
import Cloud from "@mui/icons-material/Cloud";
import Checklist from "@mui/icons-material/Checklist";
import AIpoemGenerator from "../assets/AIPoemGenerator.png";
import AmazonClone from "../assets/AmazonClone.png";
import NetflixClone from "../assets/NetflixClone.png";
import EvangadiForum from "../assets/EvangadiForum.png";
import WeatherApp from "../assets/WeatherApp.png";
import TodoListApp from "../assets/TodoListApp.png";

const projects = [
  {
    id: 1,
    title: "AI Poem Generator",
    description:
      "lightweight web application that crafts unique poems in real-time using vanilla JavaScript and AI. Users input a title or theme, and the app generates creative verses",
    icon: <Book fontSize="large" />,
    image: AIpoemGenerator,
    tags: ["JavaScript", "HTML", "CSS", "AI"],
    url: "https://aipoemwriter.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A responsive Netflix interface clone that displays movie recommendations and plays trailers using TMDB API and YouTube integration",
    icon: <PhoneAndroid fontSize="large" />,
    image: NetflixClone,
    tags: ["React", "TMDB API", "YouTube API", "CSS"],
    url: "https://meazanetflexx.netlify.app/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description:
      "A React e-commerce platform using Firebase for real-time data, authentication, and cart management.",
    icon: <DesignServices fontSize="large" />,
    image: AmazonClone,
    tags: ["React", "Firebase", "Material UI", "CSS", "stripe"],
    url: "https://amazonmeazaclonetwo.netlify.app/",
  },
  {
    id: 4,
    title: "Evangadi Forum",
    description:
      " React/Node.js Q/A platform for asking technical questions, voting on solutions, and discussing topics in real-time.",
    icon: <Code fontSize="large" />,
    image: EvangadiForum,
    tags: ["React", "Express", "JWT", "PostgreSQL"],
    url: "https://evangadi-forum-deployment-integrate.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "Real-time weather application with 5-day forecasts, location detection, and interactive maps. Pulls data from WeatherAPI.com.",
    icon: <Cloud fontSize="large" />,
    image: WeatherApp,
    tags: ["React", "Context API", "Geolocation", "Chart.js"],
    url: "https://myfirstshecodesweatherappp.netlify.app/",
  },
  {
    id: 6,
    title: "To-Do List App",
    description:
      "A localStorage-powered task manager that survives page refreshes and organizes tasks by completion status.",
    icon: <Checklist fontSize="large" />,
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
