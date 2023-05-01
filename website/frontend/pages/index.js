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
				Parking Occcupany<br/>Detection System<br/>(PODS)
			</h1>

			<div className={styles.btngroup}>
				<button>
				{/* available parking link */}
					<div>
						<Link
							href="/lots"
							className={styles.card}
							rel="noopener noreferrer"
						>
							<div>
								<h2 className={inter.className}>
									<div className={styles.btntexta}>
									Available Parking
									</div>
								</h2>
								<p className={styles.btntextb}>
									<div className={styles.btntextb}>
									Find available parking lots.
									</div>
								</p>
							</div>
						</Link>
					</div>
				</button>
				&nbsp;
				<button>
					{/* parking statistics link */}
					<div>
						<Link
							href="/lots2"
							rel="noopener noreferrer"
						>

							<div>
								<h2 className={inter.className}>
									<div className={styles.btntexta}>
									Parking Statistics
									</div>
								</h2>
								<p className={styles.btntextb}>
									<div className={styles.btntextb}>
									Discover past parking lot activity.
									</div>
								</p>
							</div>
						</Link>
					</div>
				</button>
				&nbsp;
				<button>
					{/* help link */}
					<div>
						<Link
							href="/help"
							rel="noopener noreferrer"
						>
							<div>
								<h2 className={inter.className}>
									<div className={styles.btntexta}>
									Help
									</div>
								</h2>
								<p className={styles.btntextb}>
									<div className={styles.btntextb}>
									Read more about the project.
									</div>
								</p>
							</div>
						</Link>
					</div>
				</button>
			</div>
			<div className={styles.team_description}>
				<p className={inter.className}>
					<b>Team Ctrl-Alt-Elites:</b><br/>
						Corey Belk-Scroggins, Brianna Stewart,
						<br/>Garrett Jones, and Landon Tomkins
					</p>
			</div>
		</>
	);
}

export default Home;

/*
<br></br>
			<div className={styles.btngroup}>
			<button>
			<div>
				<Link
					href="/lots"
					rel="noopener noreferrer"
				>
					<div>
						<h2 className={inter.className}>
							Available Parking
						</h2>
						<p className={inter.className}>
							Find available parking lots.
						</p>
					</div>
				</Link>
			</div>
			</button>

			<button>
			<div>
				<Link
					href="/lots2"
					rel="noopener noreferrer"
				>
					<div>
						<h2 className={inter.className}>
							Parking Lot Activity
						</h2>
						<p className={inter.className}>
							Find past parking lot activity.
						</p>
					</div>
				</Link>
			</div>
			</button>
			<button>
			<div>
				<Link
					href="/help"
					rel="noopener noreferrer"
				>
					<div>
						<h2 className={inter.className}>
							Help
						</h2>
						<p className={inter.className}>
							Read more about the project.
						</p>
					</div>
				</Link>
			</div>
			</button>
			</div>
			<div className={styles.description}>
				<p className={inter.className}>
					<b>Team Ctrl-Alt-Elites</b>
						Corey Belk-Scroggins, Brianna Stewart,
						<br/>Garrett Jones, and Landon Tomkins
					</p>
			</div>
*/ 
			