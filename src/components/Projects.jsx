import  { useState } from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "Volunteer Hunter",
            image: "ecommerce.jpg", // Replace with actual image path
            technologies: ["React", "Node.js", "MongoDB"],
            description: "Volunteer Hunter is an intuitive platform that connects people with volunteer opportunities. Whether you're looking to give back to your community or in need of volunteers, this platform helps match you with the right causes. With its user-friendly interface and seamless navigation, Volunteer Hunter makes it easier than ever to engage in volunteer activities.",
            liveLink: "https://volenter-find.web.app/",
            githubClientLink: "https://github.com/username/ecommerce",
            githubServerLink: "https://github.com/username/ecommerce",
            details: "Faced challenges in payment gateway integration and data security. Future plans include a recommendation engine and enhanced UX.",
        },
        {
            id: 2,
            name: "Portfolio Website",
            image: "portfolio.jpg", // Replace with actual image path
            technologies: ["React", "Tailwind CSS", "Netlify"],
            description: "A personal portfolio to showcase projects and skills.",
            liveLink: "https://portfolio-live-link.com",
            githubClientLink: "https://github.com/username/ecommerce",
            githubServerLink: "https://github.com/username/ecommerce",
            details: "Worked on responsive design and SEO. Future updates will include a blog and real-time content updates.",
        },
        {
            id: 3,
            name: "Weather App",
            image: "weather.jpg", // Replace with actual image path
            technologies: ["React", "OpenWeather API"],
            description: "A weather forecasting app that displays real-time weather data.",
            liveLink: "https://weather-live-link.com",
            githubClientLink: "https://github.com/username/ecommerce",
            githubServerLink: "https://github.com/username/ecommerce",
            details: "Managed API rate limits and error handling. Plans include adding language support and detailed forecasts.",
        },
    ];

    return (
        <div className="bg-gray-900 text-white py-10 px-5">
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
                        <h2 className="text-3xl font-bold mb-4">
                            {selectedProject.name}
                        </h2>
                        <p>
                            <strong>Main Technologies:</strong>{" "}
                            {selectedProject.technologies.join(", ")}
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
                                className="text-blue-400 underline hover:text-blue-500"
                            >
                                {selectedProject.liveLink}
                            </a>
                        </p>
                        <p>
                            <strong>GitHub Client Link:</strong>{" "}
                            <a
                                href={selectedProject.githubClientLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-500"
                            >
                                {selectedProject.githubClientLink}
                            </a>
                        </p>
                        <p>
                            <strong>GitHub Server Link:</strong>{" "}
                            <a
                                href={selectedProject.githubServerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-500"
                            >
                                {selectedProject.githubServerLink}
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
