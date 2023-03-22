import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Parking Lot Occcupany Detection System (PODS)</h1>
    <div className={styles.grid}>
          <a
          href="/details"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Available Parking <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find available parking lots.
            </p>
          </a>
          
        </div>
        <div className={styles.grid}>
          <a
            href="/stats"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Parking Lot Activity <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find past parking lot activity.
            </p>
          </a>
          </div>

          <div className={styles.grid}>
          <a
            href="/help"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Help <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Read the documentation for the project.
            </p>
          </a>
        </div>
    </>
  );
}