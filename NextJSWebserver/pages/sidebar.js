import React from 'react';
import {slide as Menu} from 'react-burger-menu'
import '../styles/sidebar.module.css';

export default props => {
    return (
        <Menu>
            <a id="menu-item" href="/">
                Home
            </a>
            <a id="menu-item" href="/lots">
                Available Parking
            </a>
            <a id="menu-item" href="/stats">
                Parking Lot Statistics
            </a>
            <a id="menu-item" href="/help">
                Help
            </a>
        </Menu>
    )
}