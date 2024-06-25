import React, { useState, useEffect } from 'react';
import './achievement.css';
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6';

import Odometer from "react-odometerjs";
import { GiTeamIdea } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';

const Achievement = () => {
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [teams, setTeams] = useState(0);
    const [awards, setAwards] = useState(0);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setClients(120);
            setProjects(150);
            setTeams(44);
            setAwards(9);
        }, 3000);

        return () => clearTimeout(timeOutId);
    }, []);

    return (
        <div className='achievement__container'>
            <div className="achievement">
                <div className="icon__container">
                    <FaUsersLine />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer className='title' value={clients} />
                        <h1 className="g-text title">K</h1>
                    </div>
                    <small className="text__muted">Happy Customers</small>
                </div>
            </div>

            <div className="achievement">
                <div className="icon__container">
                    <FaDiagramProject />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer className='title' value={projects} />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Completed Projects</small>
                </div>
            </div>

            <div className="achievement">
                <div className="icon__container">
                    <GiTeamIdea />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer className='title' value={teams} />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Expert Workers</small>
                </div>
            </div>

            <div className="achievement">
                <div className="icon__container">
                    <FaAward />
                </div>
                <div className="details">
                    <div className="count__row">
                        <Odometer className='title' value={awards} />
                        <h1 className="g-text title">+</h1>
                    </div>
                    <small className="text__muted">Awards Winning</small>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
