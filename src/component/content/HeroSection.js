import React from 'react';
import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = (props) => {
    return (
        <>
        <section id="hero" className="hero_section d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="">{props.titleBefore}<br/>{props.titleAfterBr} <strong>{props.titleStrong}</strong>.</h1>
                                <h2 className="my-3">{props.description}</h2>
                                <div className="mt-3">
                                    <Link to={props.visit} className="btn get_started">{props.c2aText}</Link>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2 text-center">
                                <img src={props.imgSrc} alt="Home Page Hero Image" className="img-fluid animated"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSection;