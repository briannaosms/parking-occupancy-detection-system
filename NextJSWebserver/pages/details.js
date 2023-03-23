// import React from 'react';
// import Sidebar from './sidebar';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from'next/image';
import Head from'next/head';


// const ParkingLotPicture = () => (
//     <Image
//         src="/images/parking-lot.jpg"
//         height={144}
//         width={144}
//         alt="Nethken Parking Lot Map"
//     />
// )

function Details() {
    return (
        <Layout home>
        <Head>
            <title>{siteTitle}</title>
            <script 
                src="https://kit.fontawesome.com/2ce1107d3a.js" 
                crossorigin="anonymous"
            ></script>
        </Head>
        <section className={utilStyles.headingLg}>
            <h1>Nethken Lot</h1>
            <p>501 Dan Reneau Drive | Ruston, LA 71270</p>
            <Image
                src="/parking-lot.jpg"
                height={244}
                width={244}
                alt="Nethken Parking Lot Map"
            />
        </section>
        <section className={utilStyles.headingMd}>
            <h2>Available Parking</h2>
            <p>Last updated: 00:00:00</p>
            <h3>Student</h3>
            <h3>Faculty</h3>
            <h3>Visitor</h3>
            <h3>Handicapped</h3>
        </section>
        
        {/* <div className="Details" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <h1>Parking Lot Details</h1>
                <h2>Look at the details of this parking lot!</h2>
            </div>
        </div> */}
        </Layout>
    );
}

export default Details;