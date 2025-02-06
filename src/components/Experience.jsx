import React from 'react';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import animationData from '../../public/company.json'

const Experience = () => {
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
        <section id="experience" className="flex flex-col lg:flex-row items-center justify-between  md:px-24 px-10 py-10 mt-16 shadow-[#F7CAC9] shadow-lg">
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


            {/* Left side - Lottie Animation */}
            <motion.div
                className="lg:w-1/2 text-center mb-10 lg:mb-0 lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Trigger when scrolling into view
                variants={textVariant}
            >
                <h2 className="text-4xl font-bold text-[#6B5B95]">Experience</h2>
                <p className="mt-4 text-lg text-[#2E4053] dark:text-white text-justify">
                    I had the incredible opportunity to work as an <span className="font-semibold">Internship Trainee</span> at
                    <span className="font-semibold animate-color-change"> Teletalk Bangladesh Limited</span>, Khulna Branch.
                    During my <span className="font-semibold">two-month</span> on-site internship, I gained hands-on experience in the
                    telecommunications sector, enhancing my technical expertise and problem-solving skills.
                    This journey not only deepened my industry knowledge but also strengthened my ability
                    to work in a dynamic and professional environment.
                </p>



            </motion.div>


        </section>
    );
};

export default Experience;