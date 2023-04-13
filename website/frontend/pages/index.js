import Link from 'next/link';
import Head from "next/head"

import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'

const inter = Inter({ subsets: ['latin'] })

function Home() {
	return (
		<>
			{/* browser tab title and icon */}
			<Head>
				<link rel="icon" href="/latech.ico"/>
				<title>Home</title>
			</Head>

			{/* page content */}
			{/* page main heading/title */}
			<h1 className={styles.context}>
				Parking Occcupany Detection System (PODS)
			</h1>

			{/* available parking link */}
			<div className={styles.card}>
				<a
					href="/lots"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={styles.border}>
						<h2 className={inter.className}>
							Available Parking
						</h2>
						<p className={inter.className}>
							Find available parking lots.
						</p>
					</div>
				</a>
			</div>

			{/* parking statistics link */}
			<div className={styles.card}>
				<a
					href="/lots2"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={styles.border}>
						<h2 className={inter.className}>
							Parking Lot Activity
						</h2>
						<p className={inter.className}>
							Find past parking lot activity.
						</p>
					</div>
				</a>
				</div>

			{/* help link */}
			<div className={styles.card}>
				<a
					href="/help"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={styles.border}>
						<h2 className={inter.className}>
							Help
						</h2>
						<p className={inter.className}>
							Read more about the project.
						</p>
					</div>
				</a>
				<br/>

				{/* footer with project creators */}
				<p className={inter.className}>
					<b>Team Ctrl-Alt-Elites</b>
					<br/>
						Corey Belk-Scroggins, Brianna Stewart,
						<br/>Garrett Jones, and Landon Tomkins
					</p>
			</div>
		</>
	);
}

export default Home;