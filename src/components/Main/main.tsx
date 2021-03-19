import React from 'react';
import './main.scss';
import { Menu } from '../Menu/menu';

export const Main: React.FC = () => {
    return(
        <div className="main">
            <div className="main__container">
                <Menu />
            </div>
        </div>
    )
};
