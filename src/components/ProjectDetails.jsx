import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams(); // This will get the dynamic project ID from the URL

  const projectData = {
    1: {
      name: "AdoptNest",
      description: "AdoptNest is a platform for pet adoption and donations.",
      details: 'This web application enables users to adopt pets and make donations seamlessly. Users can browse pets, submit adoption applications, and donate securely via Stripe. Admins can manage pets, track donation campaigns, and handle requests through a role-based dashboard. Built with React, Tailwind CSS ensures a responsive design, while Node.js, Express, and MongoDB power the backend. Firebase Authentication secures logins, Stripe handles donations, and Cloudinary manages image uploads. Lottie animations enhance the UI, and Formik with Yup ensures smooth form validation.',
      futureScope: 'Real-time chat for adopters & pet owners, Wishlist & Favorites for users.',
      techStack: "React | Node.js | MongoDB | Firebase | Stripe | Cloudinary | Formik",
      img: "https://i.ibb.co.com/twtJFFj6/Screenshot-2025-02-06-145858.png",
      liveLink: "https://pet-adoption-6437b.web.app/",
      clientGitHub: "https://github.com/sumaya257/petadoption-client",
    },
    2: {
      name: "Guideline Grove",
      description: "High-level guidelines platform.",
      details: "Guideline Grove is a dynamic consultation platform that ensures a seamless user experience with secure authentication via JWT and real-time updates. Built with React for the frontend and Node.js for the backend, it offers dynamic routing, category-specific features, and efficient data management using MongoDB. The platform's interactive UI components enhance usability, while its mobile-friendly design ensures accessibility across devices. With scalability in mind, Guideline Grove is optimized for performance, providing users with an intuitive and responsive experience on various platforms. The website offers a robust, secure, and efficient solution for consultation services, accessible anytime, anywhere.",
      futureScope: "Advanced Role-Based Access Control, Payment Gateway Integration.",
      techStack: "React | Node.js | MongoDB | Firebase | JWT | Cookies",
      img: "https://res.cloudinary.com/dxk6blzfu/image/upload/v1738834692/Screenshot_2025-02-06_152008_il35k1.png",
      liveLink: "https://consultation-service-27d2a.web.app/",
      clientGitHub: "https://github.com/sumaya257/consultancy-service-client",
    },
    3: {
      name: "Movie Portal",
      description: "Get various featured movies.",
      details: "The Movie Portal offers a dynamic collection of movies, with real-time data fetched from the database, allowing users to explore a wide variety of films. The platform includes an advanced search and filter system, enabling easy browsing by title, genre, or release date. Firebase Authentication ensures secure login and registration, supporting multiple methods like Google and email/password. Users can manage their profiles, track their activity, and organize their favorite movies in a user-friendly dashboard. Additionally, the platform encourages interaction through reviews and ratings, allowing users to leave feedback and engage with others' opinions, fostering a vibrant movie community.",
      futureScope: "Advanced Role-Based Access Control, JWT implementation.",
      techStack: "React | Node.js | MongoDB | Firebase",
      img: "https://res.cloudinary.com/dxk6blzfu/image/upload/v1738835028/Screenshot_2025-02-06_154253_ge09wp.png",
      liveLink: "https://movie-portal-dcb5f.web.app/",
      clientGitHub: "https://github.com/sumaya257/movie-portal-client",
    },
  };

  const project = projectData[id];

  return (
    <div className="py-10 mt-16 border-[#F7CAC9] border-2 rounded-lg shadow-lg dark:border-[#1d232a] bg-[#1d232a] shadow-[#F7CAC9] px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Project Details */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <h1 className="text-3xl font-bold text-[#6B5B95] mb-4">{project.name}</h1>
            <p className="text-gray-600 mb-4">{project.details}</p>
            <p className="text-sm font-medium text-[#6B5B95] mb-4">{project.techStack}</p>
            
            {/* Future Scope Section */}
            <h2 className="text-xl font-semibold text-[#6B5B95] mb-2">Future Scope</h2>
            <p className="text-gray-600 mb-4">{project.futureScope}</p>

            <div className="flex space-x-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#FF6F61] px-4 py-2 rounded-lg"
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

          {/* Right Column: Project Image */}
          <div className="relative shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-10 btn">
          <Link to="/" className="flex items-center text-[#6B5B95] hover:text-[#FF6F61] font-bold">
           
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
