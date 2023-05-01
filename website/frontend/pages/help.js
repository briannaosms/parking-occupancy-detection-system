import Link from 'next/link'
import Head from "next/head"

import help from '../styles/help.module.css'
import lots from '../styles/lots.module.css'

import Sidebar from './sidebar';

var lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat consequat. Nunc mattis enim ut tellus elementum. Varius morbi enim nunc faucibus."
var lorem2 = "Facilisis gravida neque convallis a cras semper auctor neque. Morbi tristique senectus et netus et malesuada fames ac. Nisi quis eleifend quam adipiscing vitae proin. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Nulla facilisi morbi tempus iaculis urna id volutpat."


function Help() {
	return (
		<>
			{/* browser tab title and icon */}
			<Head>
				<link rel="icon" href="/latech.ico"/>
				<title>Help</title>
			</Head>
			
			<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
			{/* sidebar
			<div className={lots.sidebar}>
				<a className='active' href='/'>Home</a>
				<a href='/lots'>Available Parking</a>
				<a href='/stats'>Parking Statistics</a>
				<a href='/help'>Help</a>
			</div> */}


			{/* nvabar title */}
			<div className={lots.navbar}>
				<h2 className={lots.text}>Help</h2>
			</div>


			{/* page content */}
			
			<div className={help.headinga}><b>Available Parking</b></div>
			<div className={help.contenta}>
				<div className={help.border}>
					Available Parking shows how many spots are available in the selected parking lot.<br></br>The spots range form Student, Faculty, Handicap, and Visitor parking where applicable.<br></br>The availability is indicated by the numerical value next to the parking space type.<br></br><br></br><i>Eg: [ 1 ] Student<br></br>There is 1 Student parking spot left<br></br></i>
				</div>
			</div>

			<div className={help.headingb}><b>Parking Statistics</b></div>
			<div className={help.content}>
				<div className={help.border}>
				Parking Statistics graphically shows the approximate number of available spots given the time of day.<br></br>This can be used to plan out where to park given the time you need to be on campus.
				</div>
			</div>
			
			<div className={help.headingb}><b>About PODS</b></div>
			<div className={help.content}>
				<div className={help.border}>
				Parking Occupany Detection System (PODS) is a student led senior project that utilizes AI and machine learning to detect parking lot availability.<br></br>By using object detection, we can map parking spots and determine their availability.<br></br>This information is delivered to a database and sent to the website you are veiwing right now!
				</div>
			</div>
		</>
	);
}

export default Help;