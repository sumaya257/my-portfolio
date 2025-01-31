import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Banner = () => {
    // Variants for the typing animation
    const textVariant = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    // Fade-in animation for description and button
    const fadeVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
        },
    };

    // In-and-out animation for technologies
    const inOutVariant = {
        hidden: { opacity: 0, x: "-100%" }, // Start from the left, invisible
        visible: {
            opacity: 1,
            x: "0%", // Move to the center
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        exit: {
            opacity: 0,
            x: "100%", // Move out to the right
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const technologies = [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
    ];

    return (
        <div id="home" className="relative mt-5 border-2 border-[#F7CAC9] dark:border-[#1d232a] shadow-[#F7CAC9]  rounded-lg shadow-lg py-16 px-32 flex flex-col lg:flex-row items-center lg:justify-between gap-4">
            {/* Left Side Content */}
            <div className="flex flex-col items-start text-left space-y-8 max-w-lg">
                <h1 className="text-xl font-semibold text-[#2E4053]">
                    👋 <span className="text-[#FF6F61]">Hey there!</span>
                </h1>
                <motion.h2
                    className="text-4xl font-bold text-[#6B5B95] whitespace-nowrap border-r-2 border-[#FF6F61] mb-2"
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    I am Sumaya Tabassum
                </motion.h2>
                <motion.p
                    className="mt-2 text-lg leading-relaxed text-[#2E4053] dark:text-white text-justify"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                >
                    Welcome to my portfolio! 🌟 I’m a passionate learner exploring web
                    development with a focus on JavaScript, React.js, and Node.js. I enjoy
                    building creative and functional websites. 🚀
                </motion.p>
                <motion.p
                    className="mt-2 text-lg leading-relaxed text-[#2E4053] dark:text-white text-justify"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                >
                    Let’s collaborate to create meaningful digital experiences! Thank you
                    for visiting my portfolio. Happy coding! 🧑‍💻
                </motion.p>

                {/* Animated Technologies */}
                <div className="mt-4">
                    <h3 className="text-[#FF6F61] font-semibold mb-2">Technologies I Use:</h3>
                    <motion.div
                        className="flex gap-2 flex-wrap"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 1.5, // Stagger each skill animation by 1.5 seconds
                                    repeat: Infinity,
                                    repeatType: "loop",
                                },
                            },
                        }}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="px-4 py-2 bg-[#6B5B95] text-white rounded-full text-sm font-medium shadow-md"
                                variants={inOutVariant}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#FF6F61",
                                    color: "#FFFFFF",
                                }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Button */}
                <div className="flex gap-4">
                    {/* Download Resume Button */}
                    <motion.a
                        href="https://drive.google.com/file/d/1i0brgpDKIxEl9VVlyeYF6sMA8U6JStW8/view?usp=sharing" // Replace with the actual path to your resume
                        download
                        className="inline-block px-6 py-3 bg-[#FF6F61] text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-l hover:from-[#FF6F61] hover:to-[#6B5B95]"
                        target="_blank"
                        variants={fadeVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        Download Resume
                    </motion.a>



                    <motion.div
                        className="flex items-center gap-6 px-8 py-3 bg-[#6B5B95] text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6B5B95] hover:to-[#FF6F61]"
                        variants={fadeVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Email Icon */}
                        <a
                            // href="mailto:sumayaece19@gmail.com" // Replace with your email
                            href="mailto:sumayaece19@gmail.com?subject=Subject%20Here&body=Message%20Here"
                            className="text-white hover:text-gray-200 transition"
                            aria-label="Email"
                        >
                            <FaEnvelope className="text-4xl text-white p-2" />
                        </a>

                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/sumaya257" // Replace with your GitHub profile link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-200 transition"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-4xl text-white p-2" />
                        </a>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/sumaya-tabassum-tanna/" //  LinkedIn profile link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-200 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-4xl text-white p-2" />
                        </a>
                    </motion.div>

                </div>


            </div>

            {/* Right Side Image */}
            <motion.div
                className="relative flex flex-col justify-center items-center mt-8 lg:mt-0"
                animate={{
                    y: [0, -10, 0], // Move the image up and down
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{
                    y: "0%", // Stop the movement on hover
                    transition: { duration: 0.3 },
                }}
            >
                <img
                    src="https://i.ibb.co.com/6JgRtT3p/image-removebg-preview.png" // my image URL
                    alt="Profile"
                    className="rounded-full  md:w-80 md:h-80 shadow-md hover:scale-105 transform transition-all duration-300 border-2 border-[#6B5B95]"
                />
                {/* Text Below Image */}
                <motion.span
                    className="mt-4 text-2xl font-bold text-[#6B5B95]"
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                >
                    Frontend Web Developer
                </motion.span>
            </motion.div>
        </div>
    );
};

export default Banner;
