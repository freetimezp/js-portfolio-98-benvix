import React from 'react';
import "./services.css";

import { services } from '../../data';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="services__top">
                    <h1 className="title">Our <span className='g-text'>Services</span></h1>
                    <h3 className="sub__title">
                        We specialize in strategic construction innovation.
                    </h3>
                </div>

                <div className="services__container">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
