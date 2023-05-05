import Link from 'next/link';
import React from 'react';
import { push as Menu } from 'react-burger-menu';

import sidebarmenu from '../styles/Sidebar.module.css'

export default function sidebar (){
  return (
    <div className="sidebar">
      <Menu styles={styles}>
      <div>Pages</div>
      <hr class='line-height:25px;'></hr>
        <Link className="menu-item" href="/">
          <b>Home</b>
        </Link>
        <hr class='line-height:25px;'></hr>
        <Link className="menu-item" href="/lots">
          <b>Available Parking</b>
        </Link>
        <hr class='line-height:25px;'></hr>
        <Link className="menu-item" href="/lots2">
          <b>Parking Statistics</b>
        </Link>
        <hr class='line-height:25px;'></hr>
        <Link className="menu-item" href="/help">
          <b>Help</b>
        </Link>
        <hr class='line-height:25px;'></hr>
      </Menu>
    </div>
  );
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '40px',
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
    width: '24px',
  },

  bmCross: {
    background: '#525252'
  },

  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '50%'
  },

  bmMenu: {
    background: '#c0c0c0',
    fontSize: '14pt',    
  },

  bmMorphShape: {
    fill: '#c0c0c0'
  },

  bmItemList: {
    color: 'black',
    padding: '10px',
    padding_top: '10px'
  },

  bm_Item: {
    display: 'inline-block',
    color: '#d1d1d1',
    margin_bottom: '20px',
    text_align: 'left',
    text_decoration: 'none',
    padding_top: '10px'
  },

  bm_item_hover: {
    color: 'red',
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.8)'
  }
}