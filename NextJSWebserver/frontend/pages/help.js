import Link from 'next/link'
import Head from "next/head"

import lots from '../styles/lots.module.css'
import help from '../styles/help.module.css'

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
			
				
			{/* sidebar */}
			<div className={lots.sidebar}>
				<a className='active' href='/'>Home</a>
				<a href='/lots'>Available Parking</a>
				<a href='/stats'>Parking Statistics</a>
				<a href='/help'>Help</a>
			</div>


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
					placeholder={lorem1}
				></textarea>

				<h3>Parking Statistics</h3>
				<textarea
					readOnly = {true} 
					id="response" 
					rows="10" 
					cols="40" 
					placeholder={lorem2}
				></textarea>
			</div>
		</>
	);
}

export default Help;