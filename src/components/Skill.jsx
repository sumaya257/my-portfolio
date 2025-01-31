import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
// Import skill icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiFirebase, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { BsCloudUpload } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {

  // Skill categories
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", icon: SiFirebase, color: "text-[#F7DF1E]" },
        { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "DaisyUI", icon: SiDaisyui, color: "text-[#38BDF8]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "text-[#68A063]" },
        { name: "Express.js", icon: FaNodeJs, color: "text-[#000000]" },
        { name: "Next.js", icon: TbBrandNextjs, color: "text-black" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#4DB33D]" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "GitHub", icon: FaGithub, color: "text-black" },
        { name: "Figma", icon: IoLogoFigma, color: "text-[#F24E1E]" },
        { name: "Pixso", icon: IoLogoFigma, color: "text-[#38BDF8]" },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Surge", icon: BsCloudUpload, color: "text-[#3EAAF6]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
        { name: "Netlify", icon: BsCloudUpload, color: "text-[#00C7B7]" },
      ],
    },
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Animation occurs only once
    });
  }, []);

  return (
    <div id="skill" className="py-10 mt-16 px-10 border-[#F7CAC9] border-2 rounded-lg shadow-lg dark:border-[#1d232a] shadow-[#F7CAC9]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#6B5B95]">Skills I Have</h2>
      </div>

      <div className="container mx-auto space-y-20">
        {/* Frontend and Backend Skills in boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend Skills */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-[#6B5B95] mb-6 text-center animate-color-change">Frontend</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {skills[0].items.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center group hover:scale-110 transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100} // Adding a delay for each card
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                    <Icon
                      className={`text-4xl ${skill.color} group-hover:scale-125 transition-transform`}
                    />
                    </motion.div>
                    <span className="text-lg font-medium group-hover:text-[#FF6F61]">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend Skills */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold text-[#6B5B95] mb-6 text-center animate-color-change">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills[1].items.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center group hover:scale-110 transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                    <Icon
                      className={`text-4xl ${skill.color} group-hover:scale-125 transition-transform`}
                    />
                    </motion.div>
                    <span className="text-lg font-medium group-hover:text-[#FF6F61]">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tools and Deployment Skills in boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tools Skills */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-bold text-[#6B5B95] mb-6 text-center animate-color-change">Tools</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {skills[2].items.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center group hover:scale-110 transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                    <Icon
                      className={`text-4xl ${skill.color} group-hover:scale-125 transition-transform`}
                    />
                    </motion.div>
                    <span className="text-lg font-medium group-hover:text-[#FF6F61]">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deployment Skills */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-2xl font-bold text-[#6B5B95] mb-6 text-center animate-color-change">Deployment</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills[3].items.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center group hover:scale-110 transition-transform"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                    <Icon
                      className={`text-4xl ${skill.color} group-hover:scale-125 transition-transform`}
                    />
                    </motion.div>
                    <span className="text-lg font-medium group-hover:text-[#FF6F61]">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
