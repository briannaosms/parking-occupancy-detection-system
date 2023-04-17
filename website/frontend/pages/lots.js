import Link from 'next/link'
import Head from "next/head"

import lots from '../styles/lots.module.css';
import Sidebar from './sidebar';

function Lots() {
	return (
		<>
			{/* browser tab title and icon */}
			<Head>
				<link rel="icon" href="/latech.ico"/>
				<title>Available Parking</title>
			</Head>
			
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
			

			{/* sidebar
			<div className={lots.sidebar}>
				<a className='active' href='/'>Home</a>
				<a href='/lots'>Available Parking</a>
				<a href='/stats'>Parking Statistics</a>
				<a href='/help'>Help</a>
			</div> */}

			{/* navbar title */}
			<div className={lots.navbar}>
				<h2>Parking Lots</h2>
			</div>

			
            {/* page content */}
			<div className={lots.content}>
				<a href="/nethken" className={lots.go}>Nethken Lot &#8250;</a>
				<a href="/louisiana" className={lots.go}>Louisiana Lot &#8250;</a>
				<a href="/dan-reneau-legacy" className={lots.go}>Dan Reneau Legacy Lot &#8250;</a>
			</div>
		</>
	);
}

export default Lots;