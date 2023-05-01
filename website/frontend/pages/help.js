import Link from 'next/link'
import Head from "next/head"

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
			<div className={help.navbar}>
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
					placeholder='Avilable Parking shows how many sport are available in the selected parking lot. the spots range form Student, Faculty, Handicap, and Vistor parking where applicable. The availability is indicated by a ratio of spots taken to the total number of spots. Eg: Student 17/30: there are 17 spots taken out of the total of 30; there are 13 spots that are free.'
				></textarea>

				<h3>Parking Statistics</h3>
				<textarea
					readOnly = {true} 
					id="response" 
					rows="5" 
					cols="40" 
					placeholder='Parking Statistics shows graphically the approximate number of available spots given the time of day. This can be used to plan out where to park given the time you need to be on campus.'
				></textarea>

				<h3>About PODS</h3>
				<textarea
					readOnly = {true} 
					id="response" 
					rows="12" 
					cols="40" 
					placeholder='Parking Lot Occupany Detection System (PODS) is a student led senoir project that utilizes AI and machine learning to detect parking lot availability. By using object detection, we can map out the areas where a parking spot is in a lot and firgure out the availability of a specific lot. This data this then transfered to a hosted database and then send to the website you are veiwing right now!'
				></textarea>
			</div>
		</>
	);
}

export default Help;