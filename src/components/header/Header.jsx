import React from 'react';
import './header.css';
import { Link } from 'react-scroll';

import { hero_image } from '../../assets';

import Achievement from '../achievement/Achievement';

const Header = () => {
    return (
        <header className='header' id='header'>
            <div className="container full__height">
                <div className="row">
                    <div className="column">
                        <h1 className="title">
                            Building Dreams, {" "}
                            <span className="g-text">Creative Reality</span>
                        </h1>
                        <p className="text__muted description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Repudiandae labore laudantium rerum quam, dolor explicabo
                            obcaecati veniam quaerat est! Expedita aperiam officiis
                            sed cumque nemo dolores placeat porro distinctio ratione
                            fugiat, suscipit eveniet voluptatibus accusamus.
                        </p>
                        <div className="buttons__container">
                            <Link to="services" smooth={true} className='btn'>
                                Our Services
                            </Link>
                            <Link to="contact" smooth={true} className='btn btn__primary'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <div className="image__container">
                            <img src={hero_image} alt="hero_image" />
                        </div>
                    </div>
                </div>

                <Achievement />
            </div>
        </header>
    );
}

export default Header;
