import React from 'react';
import ServiceCard from '../content/ServiceCard';
import ServiceData from '../content/ServiceList';

const Services = () => {
    return (
        <>
            <section id="Services" className="Service_page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="service_banner">
                                <h1>Our Services</h1>
                            </div>
                            <div className="row gy-4">
                                {ServiceData.map((Val)=>{
                                    return (
                                    <>
                                    <ServiceCard
                                        ImgSrc={Val.ImgSrc}
                                        CardTitle={Val.CardTitle}
                                        ServiceDes={Val.ServiceDes}
                                        Visit={Val.Visit}
                                        LinkText={Val.LinkText}
                                    />
                                    </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Services;