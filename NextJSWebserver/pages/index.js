import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'
import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/latech.ico"/>
      <title>Home</title>
    </Head>
    <h1 className={styles.context}>Parking Occcupany Detection System (PODS)</h1>
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
    <div className={styles.card}>
          <a
            href="/stats"
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