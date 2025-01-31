import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from '../../public/edu.json'

const Education = () => {
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
        <section id="education" className="flex flex-col lg:flex-row items-center justify-between py-10 lg:px-24 md:px-24 px-10 mt-16 shadow-[#F7CAC9] shadow-lg">
            {/* Right side - Text */}
            <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Trigger when scrolling into view
                variants={textVariant}
            >
                <h2 className="text-4xl font-bold text-[#6B5B95]">Educational Background</h2>
                <p className="mt-4 text-lg text-[#2E4053] dark:text-white text-justify">
                    I completed my graduation in 2024 with a degree in Electronics and Communication Engineering from Khulna University,Khulna. During my studies, I maintained a CGPA of 3.25. <br /> After graduation, I discovered my passion for <span className='animate-color-change'> web development</span>, and since then, I have been actively pursuing it, building my skills and knowledge in the field.
                </p>


            </motion.div>


            {/* Left side - Lottie Animation */}
            <motion.div
                className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Trigger when scrolling into view
                variants={textVariant}
            >
                <Lottie  options={lottieOptions} height={300} width={300} />
            </motion.div>


        </section>
    );
};

export default Education;