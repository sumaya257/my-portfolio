import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from '../../public/animation-aboutme.json'; // Replace with your Lottie animation JSON file

const AboutMe = () => {
  // Lottie animation settings
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Lottie animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Framer Motion scroll-triggered animation for the text
  const textVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between py-10 lg:px-24 md:px-24 px-10 mt-16 shadow-[#F7CAC9] shadow-lg">
      {/* Left side - Lottie Animation */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger when scrolling into view
        variants={textVariant}
      >
        <h2 className="text-4xl font-bold text-[#6B5B95]">About Me</h2>
        <p className="mt-4 text-lg text-[#2E4053] dark:text-white text-justify">
          <span className='animate-color-change font-bold'>I’m a web developer</span> with a growing passion for coding and problem-solving. My journey in programming started as a curiosity, which eventually led to a full-fledged career. After completing my graduation in 2024, I found myself drawn to web development because of its creative aspects and limitless opportunities. <br />
          
          I'm constantly exploring ways to improve my skills and stay updated with the latest trends in web development. Along with web development, I am also deeply interested in digital marketing and VLSI design. <br />
          
          Besides coding, I enjoy cooking. I believe in continuous learning and excited to enrich myself in the field of web development in the future.
        </p>
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Trigger when scrolling into view
        variants={textVariant}
      >
        <Lottie options={lottieOptions} height={300} width={300} />
      </motion.div>
    </section>
  );
};

export default AboutMe;
