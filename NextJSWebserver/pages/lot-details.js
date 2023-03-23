import Link from 'next/link'
import lot from '../styles/lot.module.css'

export default function Lot() {
  return (
    <>
      <head>
        <script 
          src="https://kit.fontawesome.com/2ce1107d3a.js" 
          crossorigin="anonymous"
        ></script>
      </head>
      <div className={lot.sidebar}>
        <a className='active' href='/'>Home</a>
        <a href='/lots'>Available Parking</a>
        <a href='/stats'>Parking Statistics</a>
        <a href='/help'>Help</a>
      </div>

      <div className={lot.navbar}>
          {/* <i class="fa-solid fa-bars"></i> */}
          <h2>Parking Lots</h2>
      </div>
      <div className={lot.content}>
        <h3>Nethken Lot</h3>
        <h3>Louisiana Lot Lot</h3>
        <h3>Dan Reneau Legacy Lot</h3>
      </div>
    </>
  );
}
