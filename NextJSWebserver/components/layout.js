import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const imageName = "Nethken Lot"
export const siteTitle = "Nethken Lot Details"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nethken Lot</title>
                <link rel="icon" href="../images/coes-logo.ico"/>
                <meta
                    name="description"
                    content='The parking details of the Nethken Lot'
                />
            </Head>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Back to home</Link>
                </div> 
            )}
            </div>
    );
}