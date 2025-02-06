import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";


const MyProjects = () => {
  const projects = [
    {
      id: 1,
      name: "AdoptNest",
      description:
        "AdoptNest is a platform for pet adoption and donations with secure management.",
      techStack: "React | Node.js | MongoDB | Firebase | Stripe",
      img: "https://i.ibb.co.com/twtJFFj6/Screenshot-2025-02-06-145858.png",
      liveLink: "https://pet-adoption-6437b.web.app/",
      clientGitHub: "https://github.com/sumaya257/petadoption-client",
    },
    {
      id: 2,
      name: "Guideline Grove",
      description:
        "From this guideline-hub you can experience high-level guidelines.",
      techStack: "React | Node.js | MongoDB | Firebase",
      img: "https://res.cloudinary.com/dxk6blzfu/image/upload/v1738834692/Screenshot_2025-02-06_152008_il35k1.png",
      liveLink: "https://consultation-service-27d2a.web.app/",
      clientGitHub: "https://github.com/sumaya257/consultancy-service-client",
    },
    {
      id: 3,
      name: "Movie Portal",
      description: "A unique website where you can get various featured movies.",
      techStack: "React | Node.js | MongoDB | Firebase",
      img: "https://res.cloudinary.com/dxk6blzfu/image/upload/v1738835028/Screenshot_2025-02-06_154253_ge09wp.png",
      liveLink: "https://movie-portal-dcb5f.web.app/",
      clientGitHub: "https://github.com/sumaya257/movie-portal-client",
    },
  ];

  return (
    <section className="py-10 mt-16 border-[#F7CAC9] border-2 rounded-lg shadow-lg dark:border-[#1d232a] shadow-[#F7CAC9] px-10">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#6B5B95] mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Project Image with Hover Effect */}
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
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
                    className="text-white bg-[#6B5B95] px-4 py-2 rounded-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Info & See More Button */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#2E4053] mb-2 flex items-center justify-between">
                    {project.name}
                    <Link to={`/project/${project.id}`}
                    >
                      <FontAwesomeIcon icon={faSquareArrowUpRight} className="text-[#FF6F61]" />
                    </Link>
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-sm font-medium text-[#6B5B95] mt-2">
                    {project.techStack}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
