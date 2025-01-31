import React from "react";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      name: "AdoptNest",
      description: "AdoptNest is a platform for pet adoption, donations, and user/admin dashboards with secure, seamless management.",
      techStack: "React | Node.js | MongoDB | Firebase | Stripe",
      img: "https://i.ibb.co.com/rq8HYFQ/Adopt-Nest.png", // project image
      liveLink: "https://pet-adoption-6437b.web.app/",
      clientGitHub: "https://github.com/sumaya257/petadoption-client",
      serverGitHub: "https://github.com/sumaya257/petadoption-server",
    },
    {
      id: 2,
      name: "Guideline Grove",
      description: "From this guideline-hub you can experience high-level guideline",
      techStack: "React | Node.js | MongoDB | Firebase",
      img: "https://i.ibb.co.com/BTPKP9Y/guideline-grove.png", 
      liveLink: "https://consultation-service-27d2a.web.app/",
      clientGitHub: "https://github.com/sumaya257/consultancy-service-client",
      serverGitHub: "https://github.com/sumaya257/consultation-service-server",
    },
    {
      id: 3,
      name: "Movie Portal",
      description: "A unique website where you can get various featured movie.",
      techStack: "React | Node.js | MongoDB | Firebase",
      img: "https://i.ibb.co.com/WnCGPjy/movie-portal.png", // project image
      liveLink: "https://movie-portal-dcb5f.web.app/",
      clientGitHub: "https://github.com/sumaya257/movie-portal-server",
      serverGitHub: "https://github.com/sumaya257/movie-portal-server",
    },
  ];

  return (
    <section id="project" className=" py-10 mt-16  border-[#F7CAC9] border-2 rounded-lg shadow-lg dark:border-[#1d232a] shadow-[#F7CAC9] px-10">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#6B5B95] mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2E4053] mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm font-medium text-[#6B5B95]">
                  {project.techStack}
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#FF6F61] px-4 py-2 rounded-lg mb-2"
                >
                  Live Link
                </a>
                <a
                  href={project.clientGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#6B5B95] px-4 py-2 rounded-lg mb-2"
                >
                  Client GitHub
                </a>
                <a
                  href={project.serverGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#2E4053] px-4 py-2 rounded-lg"
                >
                  Server GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
