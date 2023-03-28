import Link from 'next/link'
import lots from '../styles/lots.module.css'

export default function Lot() {
  return (
    <>
      <title>Available Parking</title>
      {/* sidebar */}
      <div className={lots.sidebar}>
        <a className='active' href='/'>Home</a>
        <a href='/lots'>Available Parking</a>
        <a href='/stats'>Parking Statistics</a>
        <a href='/help'>Help</a>
      </div>

      {/* navbar title */}
      <div className={lots.navbar}>
          <h2>Parking Lots</h2>
      </div>
      <div className={lots.content}>
        <a href="/nethken" className={lots.go}>Nethken Lot &#8250;</a>
        <a href="/louisiana" className={lots.go}>Louisiana Lot &#8250;</a>
        <a href="/dan-reneau-legacy" className={lots.go}>Dan Reneau Legacy Lot &#8250;</a>
      </div>
    </>
  );
}
