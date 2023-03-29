import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/lots">
        Available Parking
      </a>
      <a className="menu-item" href="/stats">
        Parking Statistics
      </a>
      <a className="menu-item" href="/help">
        Help
      </a>
    </Menu>
  );
};
