import React from 'react';
import HeroSection from '../content/HeroSection';
import HeroImg from '../images/aboutImg2.png'


const About = () => {
    
    return (
        <>
            <HeroSection 
            titleBefore="Welcome"
            titleAfterBr="to"
            titleStrong="About Page"
            description="We are world best web Designer and Developer."
            c2aText="Our Services"
            visit="/services" 
            imgSrc={HeroImg}   
            />
        </>
    );
};

export default About;