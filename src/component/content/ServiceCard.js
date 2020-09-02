import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServiceCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-12">
                <div className="card">
                    <div className="car_img">
                        <img src={props.ImgSrc} className="card-img-top" alt={props.ImgSrc}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.CardTitle}</h5>
                        <p className="card-text">{props.ServiceDes}.</p>
                        <Link to={props.Visit} className="">{props.LinkText}</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;