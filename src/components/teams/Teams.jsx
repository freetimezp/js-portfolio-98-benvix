import React from 'react';
import "./teams.css";

import { teams } from '../../data';

const Teams = () => {
    return (
        <section id="team">
            <div className="container">
                <h1 className="title">Our <span className='g-text'>Teams</span></h1>

                <h3 className="sub__title">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                    architecto corrupti voluptates ipsam quos possimus asperiores
                    veniam rerum cumque quidem.
                </h3>

                <div className="teams__container">
                    {teams.map((team, index) => (
                        <div className="team__card" key={index}>
                            <div className="profile__container">
                                <img src={team.profile} alt="profile" />
                            </div>
                            <div className="details">
                                <h3 className="name">{team.name}</h3>
                                <p className="text__muted">{team.title}</p>

                                <div className="social__container">
                                    {team.social.map((item, i) => (
                                        <a
                                            href={item.url || "#"}
                                            className='icon__container'
                                            key={i}
                                            target='_blank'
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Teams;
