import Link from 'next/link';
import Head from "next/head";

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
				Parking Lot Occcupany Detection System (PODS)
			</h1>

			{/* parking statistics link */}
			<div className={styles.card}>
				<a
					href="/main"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={styles.border}>
						<h2 className={inter.className}>
							Login to CAS
						</h2>
					</div>
				</a>
				</div>
        </>
    );
}

export default Home;