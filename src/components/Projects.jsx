import { useState } from "react";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import volunteer from "../assets/volunteer.png";
import chillGamer from "../assets/chillgamer.png";
import discount from "../assets/discount.png";
import CareSync from "../assets/caresync.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "CareSync",
      image: CareSync,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      description: "A React app that allows users to view and update profile information...",
      liveLink: "https://medical-manager-8561e.web.app",
      githubClientLink: "https://github.com/imtiaz-zihad/CareSync-Client",
      githubServerLink: "https://github.com/imtiaz-zihad/CareSync-Server",
      details: "CareSync is a healthcare management platform designed to streamline medical appointments, patient records, and administrative tasks for healthcare professionals. With an intuitive interface, CareSync makes managing healthcare operations more efficient and accessible.",
    },
    {
      id: 2,
      name:"Volunteer Hunter",
      image: volunteer,
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      description: "Volunteer Hunter connects people with volunteer opportunities...",
      liveLink: "https://volenter-find.web.app/",
      githubClientLink: "https://github.com/imtiaz-zihad/Volunteer-Hunter-client",
      githubServerLink: "https://github.com/imtiaz-zihad/Volunteer-Hunter-Server",
      details: "An intuitive platform that connects volunteers to meaningful causes.",
    },
    {
      id: 3,
      name: "Chill Gamer",
      image: chillGamer,
      technologies: ["React", "Tailwind CSS", "Netlify"],
      description: "A game review application where you can add game reviews...",
      liveLink: "https://chill-gamer-38a71.web.app/",
      githubClientLink: "https://github.com/imtiaz-zihad/Chill--gamer-client",
      githubServerLink: "https://github.com/imtiaz-zihad/Chill--gamer-server",
      details: "Explore detailed feedback and ratings on various games.",
    },
    {
      id: 4,
      name: "Discount Pro",
      image: discount,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      description: "A React app that allows users to view and update profile information...",
      liveLink: "https://discount-pro-3e365.web.app/",
      githubClientLink: "https://github.com/imtiaz-zihad/Discount-Pro",
      githubServerLink: "https://github.com/imtiaz-zihad/Discount-Pro",
      details: "Check discounted items on e-commerce sites in Bangladesh.",
    },
    
  ];

  return (
    <div id="projects" className="bg-gray-900 text-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gradient">
        My Projects
      </h1>

      {/* Centered Swiper.js Slider */}
      <div className="flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="w-full md:w-3/5 lg:w-4/5 "
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="flex justify-center">
              <div className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-5 text-center">
                  <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 transition-all"
                  >
                    View More / Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Details Modal */}
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
