import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';
import Head from "next/head"

import lots from '../styles/lots.module.css'
import stats from '../styles/stats.module.css'

import Sidebar from './sidebar';

// monday chart data
var mondayData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [{
        data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
        label: "Empty parking spaces",
        backgroundColor: "rgb(39, 63, 150, 0.5)",
    }]
}
// monday chart options
var mondayOptions = {

}


// tuesday chart data
var tuesdayData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [{
        data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
        label: "Empty parking spaces",
        backgroundColor: "rgb(39, 63, 150, 0.5)",
    }]
}
// tuesday chart options
var tuesdayOptions = [

]


// wednesday chart data
var wednesdayData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [{
        data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
        label: "Empty parking spaces",
        backgroundColor: "rgb(39, 63, 150, 0.5)",
    }]
}
// wednesday chart options
var wednesdayOptions = {

}


// thursday chart data
var thursdayData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [{
        data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
        label: "Empty parking spaces",
        backgroundColor: "rgb(39, 63, 150, 0.5)",
    }]
}
// thursday chart options
var thursdayOptions =  {

}


// friday chart data
var fridayData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
    datasets: [{
        data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
        label: "Empty parking spaces",
        backgroundColor: "rgb(39, 63, 150, 0.5)",
    }]
}
// friday chart options
var fridayOptions = {

}



function Bar() {
    useEffect(() => {
        // var test = document.getElementById("0").getContext('2d');
        // test.destroy();
        // monday chart
        var mondayCtx = document.getElementById('mondayChart').getContext('2d');
        var mondayChart = new Chart(mondayCtx, {
            type: 'line',
            data: mondayData
        });

        // tuesday chart
        var tuesdayCtx = document.getElementById('tuesdayChart').getContext('2d');
        var tuesdayChart = new Chart(tuesdayCtx, {
            type: 'line',
            data: tuesdayData
        });


        var wednesdayCtx = document.getElementById('wednesdayChart').getContext('2d');
        var wednesdayChart = new Chart(wednesdayCtx, {
            type: 'line',
            data: wednesdayData
        });

        var thursdayCtx = document.getElementById('thursdayChart').getContext('2d');
        var thursdayChart = new Chart(thursdayCtx, {
            type: 'line',
            data: thursdayData
        });

        var fridayCtx = document.getElementById('fridayChart').getContext('2d');
        var fridayChart = new Chart(fridayCtx, {
            type: 'line',
            data: fridayData
        });
    }, [])

    return (
        <>
            {/* browser tab title and icon */}
            <Head>
                <link rel="icon" href="/latech.ico"/>
                <title>Parking Statistics</title>
            </Head>
            
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>

            {/* sidebar
            <div className={lots.sidebar}>
                <a className='active' href='/'>Home</a>
                <a href='/lots'>Available Parking</a>
                <a href='/stats'>Parking Statistics</a>
                <a href='/help'>Help</a>
            </div> */}


            {/* navbar title */}
            <div className={lots.navbar}>
                <h2>Parking Statistics</h2>
            </div>


            {/* page content */}
            {/* bar charts */}
            {/* monday */}
            <div className={stats.chart}>
                <h2>Monday</h2>
                <canvas id='mondayChart'></canvas>
            </div>

            {/* tuesday */}
            <div className={stats.chart}>
                <h2>Tuesday</h2>
                <canvas id='tuesdayChart'></canvas>
            </div>

            {/* wednesday */}
            <div className={stats.chart}>
                <h2>Wednesday</h2>
                <canvas id='wednesdayChart'></canvas>
            </div>

            {/* thursday */}
            <div className={stats.chart}>
                <h2>Thursday</h2>
                <canvas id='thursdayChart'></canvas>
            </div>

            {/* friday */}
            <div className={stats.chart}>
                <h2>Friday</h2>
                <canvas id='fridayChart'></canvas>
            </div>
        </>
    )
}



export default Bar;