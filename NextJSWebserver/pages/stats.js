import Link from 'next/link'
import lots from '../styles/lots.module.css'

export default function Lots() {
  return (
    <>
      {/* browser tab name */}
      <title>Parking Statistics</title>
      
      {/* sidebar */}
      <div className={lots.sidebar}>
          <a className='active' href='/'>Home</a>
          <a href='/lots'>Available Parking</a>
          <a href='/stats'>Parking Statistics</a>
          <a href='/help'>Help</a>
      </div>

      {/* title */}
      <div className={lots.navbar}>
          <h2>Parking Statistics</h2>
      </div>

      {/* page content */}
      

    </>
  );
}