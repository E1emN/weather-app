import React from 'react';
import './main.scss';
import { Menu } from '../Menu/menu';
import { Weather } from '../Weather/weather';

export const Main: React.FC = () => {
    return(
        <div className="main">
            <div className="main__container">
                <Menu />
                <Weather />
            </div>
        </div>
    )
};
