import React from 'react';
import "./logo.css";

import { PiBuildingsFill } from 'react-icons/pi';

const Logo = () => {
    return (
        <div className='logo'>
            <div className="icon__container">
                <PiBuildingsFill />
            </div>
            <h1 className="name">Ben<span>vix</span></h1>
        </div>
    );
}

export default Logo;
