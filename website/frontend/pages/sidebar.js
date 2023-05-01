import Link from 'next/link';
import React from 'react';
import { push as Menu } from 'react-burger-menu';


export default function sidebar (){
  return (
    <div className="sidebar">
      <Menu styles={styles}>
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/lots">
          Available Parking
        </Link>
        <Link className="menu-item" href="/lots2">
          Parking Statistics
        </Link>
        <Link className="menu-item" href="/help">
          Help
        </Link>
      </Menu>
    </div>
  );
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '36px',
    left: '15px',
    top: '10px',
  },

  bmBurgerBars: {
    background: 'white'
  },

  bmBurgerBarsHover: {
    background: '#676767'
  },

  bmCrossButton: {
    height: '24px',
    width: '24px'
  },

  bmCross: {
    background: '#525252'
  },

  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },

  bmMenu: {
    background: '#c0c0c0',
    padding: '2.5em 1.5em 0em',
    fontSize: '1.5em',
    
  },

  bmMorphShape: {
    fill: '#c0c0c0'
  },

  bmItemList: {
    color: 'black',
    padding: '20px',
  },

  bm_Item: {
    display: 'inline-block',
    color: '#d1d1d1',
    margin_bottom: '20px',
    text_align: 'left',
    text_decoration: 'none',
    transition: 'color 0.2s',
  },

  bm_item_hover: {
    color: '#ffffff',
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
}
