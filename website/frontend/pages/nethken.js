import Image from'next/image'
import Head from 'next/head'

import lots from '../styles/lots.module.css'
import Sidebar from './sidebar';

import { useEffect, useState } from 'react';
import Axios from 'axios';

function Details() {
    // backendData is the variable that will receive data from api
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        async function getParkingLotData() {
            // Where the api data is located
            const apiUrlEndpoint = 'https://latechpods.vercel.app/api/nethken_lot';
            // Where the response from the endpoint will be fetched
            const response = await fetch(apiUrlEndpoint);
            // Where the api data from the response will be stored as a JSON Object
            const res = await response.json();
            //console.log(res);
            // Where the api data is stored in the backendData variable
            // From Object to array by setting to .results
            setBackendData(res.results);
        }
        // Function call
        getParkingLotData();
    }, [])

    // Values for input boxes
    /*const currentFacultyNum = backendData[backendData.length - 1].CurrentSpacesFaculty + " / " + backendData[backendData.length - 1].MaxSpacesFaculty
    const currentStudentNum = backendData[backendData.length - 1].CurrentSpacesStudent + " / " + backendData[backendData.length - 1].MaxSpacesStudent
    const currentHandicappedNum = backendData[backendData.length - 1].CurrentSpacesHandicapped + " / " + backendData[backendData.length - 1].MaxSpacesHandicapped
    const currentVisitorNum = backendData[backendData.length - 1].CurrentSpacesVisitor + " / " + backendData[backendData.length - 1].MaxSpacesVisitor
    const currentDatetime = (backendData[backendData.length - 1].time)
    console.log(currentDatetime)*/
    const currentFacultyNum = backendData[backendData.length - 1].CurrentSpacesFaculty
    const currentStudentNum = backendData[backendData.length - 1].CurrentSpacesStudent
    const currentHandicappedNum = backendData[backendData.length - 1].CurrentSpacesHandicapped
    const currentVisitorNum = backendData[backendData.length - 1].CurrentSpacesVisitor
    const currentDate = (backendData[backendData.length - 1].date)
    const currentTime = (backendData[backendData.length - 1].time)

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
                <h2 className={lots.text}>Nethken Lot</h2>
            </div>


            {/* page content */}
            <div className={lots.content}>
                {/* parking lot address */}
                <p>501 Dan Reneau Drive | Ruston, LA 71270</p>
                <div>
                {/* parking lot image/map */}
                <Image
                    src="/nethken_parking_lot.jpg"
                    height={300}
                    width={300}
                    alt="Nethken Parking Lot Map"
                />
                </div>

                {/* available parking & time update */}
                <h2>Available Parking</h2>
                <form>
                    <label className={lots.timeLabel}>
                        Last updated on <b>{currentTime}</b>
                    </label>
                    {/*
                    <input type="text"
                           // Datetime format needs to be restructured
                           value={currentDatetime}
                           className={lots.timeBox}
                           readOnly 
                    />*/}
                </form>
                <br/>

                {/* available parking spaces & categories */}
                <div className={lots.readonly}>
                    {/* available student spaces */}
                    <form>
                        <input type="text"
                            value={currentStudentNum}
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Student
                        </label>
                    </form>

                    {/* available faculty spaces */}
                    <form>
                        <input type="text"
                            value={currentFacultyNum}
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Faculty
                        </label>
                    </form>

                    {/* available handicapped spaces */}
                    <form>
                        <input type="text"
                            value={currentHandicappedNum}
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Handicapped
                        </label>
                    </form>

                    {/* available students spaces */}
                    <form>
                        <input type="text"
                                value={currentVisitorNum}
                                className={lots.spaceBox}
                                readOnly/>
                        <label className={lots.spaceLabel}>
                            Visitor
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Details;