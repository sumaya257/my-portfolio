import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skill from '../components/Skill';
import Education from '../components/Education';
import Contact from '../components/Contact';
import MyProjects from '../components/MyProjects';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skill></Skill>
           <Education></Education>
           <MyProjects></MyProjects>
           <Contact></Contact>
        </div>
    );
};

export default Home;