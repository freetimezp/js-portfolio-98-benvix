import React from 'react';
import "./contact.css";

import { contacts } from '../../data';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact__form">
                    <div className="contact__form__top">
                        <h1 className="title">
                            <span className="g-text">Join Us</span>
                        </h1>
                        <p className="text__muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium totam officia debitis beatae quod maxime aliquam.
                            Recusandae excepturi consectetur esse.
                        </p>
                    </div>
                    <div className="contact__form__middle">
                        <div className="row">
                            <input type="text" placeholder='First name' name='firstname' className='control' />
                            <input type="text" placeholder='Last name' name='lastname' className='control' />
                        </div>
                        <div className="row">
                            <input type="email" placeholder='Email address' name='email' className='control' />
                            <input type="text" placeholder='Phone number' name='phone' className='control' />
                        </div>
                        <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
                    </div>
                    <div className="contact__form__bottom">
                        <button className="btn btn__primary">Send Message</button>
                    </div>
                </div>

                <div className="contact__options">
                    {contacts.map((contact, index) => (
                        <div className="option" key={index}>
                            <div className="icon__container">{contact.icon}</div>
                            <h3 className="name">{contact.name}</h3>
                            <h4 className="text__muted">{contact.value}</h4>

                            <div>
                                <a href="#" className="btn btn__primary">Contact Us</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
