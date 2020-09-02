import React from 'react';
import HeroImg from '../images/rocket.png';
import HeroSection from '../content/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection 
            titleBefore="Grow your business"
            titleAfterBr="with our"
            titleStrong="s3wd Design"
            description="We are the team of talented website developer."
            c2aText="Get Started"
            visit="/services" 
            imgSrc={HeroImg}   
            />
        </>
    );
};

export default Home;