import React from 'react';
import { elastic as Menu } from 'react-burger-menu';


export default props => {
  return (
    //<div className={sidebar.bm_menu}>
      <Menu styles={styles}>
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
    //</div>
  );
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '30px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0px'
  },
  bm_Item: {
    display: 'inline-block',
    color: '#d1d1d1',
    margin_bottom: '10px',
    text_align: 'left',
    text_decoration: 'none',
    transition: 'color 0.2s',
  },

  bm_item_hover: {
    color: '#ffffff',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
