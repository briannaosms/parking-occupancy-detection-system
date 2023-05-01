import Image from'next/image'
import Head from 'next/head'

import coming from '../styles/coming_soon.module.css'
import lots from '../styles/lots.module.css'
import Sidebar from './sidebar';


function ComingSoon() {
    return (
        <>
        {/* browser tab title and icon */}
        <Head>
            <link rel="icon" href="/latech.ico"/>
            <title>Nethken Parking</title>
        </Head>

        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>

        {/* navbar title */}
        <div className={lots.navbar}>
            <h2>Coming Soon</h2>
        </div>

        <div className={coming.description}>
            To be implemented!
        </div>
        </>
    );
}

export default ComingSoon;