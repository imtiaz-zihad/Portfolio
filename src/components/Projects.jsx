import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import volunteer from "../assets/volunteer.png";
import chillGamer from "../assets/chillgamer.png";
import discount from "../assets/discount.png";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Volunteer Hunter",
      image: volunteer,
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      description:
        "Volunteer Hunter connects people with volunteer opportunities, making it easy to engage in meaningful causes through a user-friendly platform.",
      liveLink: "https://volenter-find.web.app/",
      githubClientLink:
        "https://github.com/imtiaz-zihad/Volunteer-Hunter-client",
      githubServerLink:
        "https://github.com/imtiaz-zihad/Volunteer-Hunter-Server",
      details:
        "Volunteer Hunter is an intuitive platform that connects people with volunteer opportunities. Whether you're looking to give back to your community or in need of volunteers, this platform helps match you with the right causes.",
    },
    {
      id: 2,
      name: "Chill Gamer",
      image: chillGamer,
      technologies: ["React", "Tailwind CSS", "Netlify"],
      description:
        "A game review application where you can add game reviews and see what people think about different games.",
      liveLink: "https://chill-gamer-38a71.web.app/",
      githubClientLink: "https://github.com/imtiaz-zihad/Chill--gamer-client",
      githubServerLink: "https://github.com/imtiaz-zihad/Chill--gamer-server",
      details:
        "A game review application that lets you share your thoughts on games and read reviews from others. Explore detailed feedback and ratings on a variety of games from players worldwide.",
    },
    {
      id: 3,
      name: "Discount Pro",
      image: discount,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      description:
        "A React application that allows users to view and update their profile information, including their name and profile picture.",
      liveLink: "https://discount-pro-3e365.web.app/",
      githubClientLink: "https://github.com/imtiaz-zihad/Discount-Pro",
      githubServerLink: "https://github.com/imtiaz-zihad/Discount-Pro",
      details:
        "This project is designed to check discounted items on any e-commerce site in Bangladesh. Users can view discount types and expiration dates.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-10 text-gradient">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 transition-all"
              >
                View More / Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-8 rounded-lg max-w-lg w-full overflow-y-auto max-h-screen relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-red-500 font-bold text-lg"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="mb-4">
              <strong>Main Technologies:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tech === "React" && <FaReact />}
                    {tech === "Node.js" && <FaNodeJs />}
                    {tech === "MongoDB" && <FaDatabase />}
                    {tech === "Firebase" && <SiFirebase />}
                    {tech === "Tailwind CSS" && <SiTailwindcss />}
                    {tech}
                  </span>
                ))}
              </div>
            </p>
            <p className="my-4">
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <p>
              <strong>Live Link:</strong>{" "}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-500 flex items-center gap-2"
              >
                <FaExternalLinkAlt /> {selectedProject.liveLink}
              </a>
            </p>
            <p>
              <strong>GitHub Client Link:</strong>{" "}
              <a
                href={selectedProject.githubClientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-500 flex items-center gap-2"
              >
                <FaGithub /> {selectedProject.githubClientLink}
              </a>
            </p>
            <p>
              <strong>GitHub Server Link:</strong>{" "}
              <a
                href={selectedProject.githubServerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-500 flex items-center gap-2"
              >
                <FaGithub /> {selectedProject.githubServerLink}
              </a>
            </p>
            <p className="mt-4">
              <strong>Details:</strong> {selectedProject.details}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
