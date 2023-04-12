import Link from 'next/link'
import Head from "next/head"

import lots from '../styles/lots.module.css'
import help from '../styles/help.module.css'

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
				<h2>Help</h2>
			</div>


			{/* page content */}
			<div className={help.content}>
				<h3>Available Parking</h3>
				<textarea 
					readOnly = {true} 
					id="response" 
					rows="10" 
					cols="40" 
					placeholder="Available parking indicates how many spots are available in the selected parking lot. Parking spaces are seperated by type: Student, Faculty, Handicap, and Visitor. Each type of space is given a ratio of available spots to total spots. E.g. : Student [1/16] indicates there is one parking space open out of a total of 16 spaces."
				></textarea>

				<h3>Parking Statistics</h3>
				<textarea
					readOnly = {true} 
					id="response" 
					rows="10" 
					cols="40" 
					placeholder="Parking statistic gives an approximate number of open spaced each weekday between the hours of 7:00 a.m. and 5:00 p.m. based on previous data trends."
				></textarea>

				<h3>About PODS</h3>
				<textarea
					readOnly = {true} 
					id="response" 
					rows="10" 
					cols="40" 
					placeholder="Parking Lot Occupancy Detection System, or PODS, is a student project that aims to reduce the heacache and frustration in finding availble parking, especially during peak rush hours between classes. PODS utilizes cameras, machine learning, and object detection to determine spot vacancy. This data is then sent to a database and displayed on this website hosted on Vercel.com."
				></textarea>
			</div>
		</>
	);
}

export default Help;