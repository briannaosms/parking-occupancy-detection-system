// import Link from 'next/link'
// import lots from '../styles/lots.module.css'

// export default function Lots() {
//   return (
//     <>
//       {/* browser tab name */}
//       <title>Parking Statistics</title>
      
//       {/* sidebar */}
//       <div className={lots.sidebar}>
//           <a className='active' href='/'>Home</a>
//           <a href='/lots'>Available Parking</a>
//           <a href='/stats'>Parking Statistics</a>
//           <a href='/help'>Help</a>
//       </div>

//       {/* title */}
//       <div className={lots.navbar}>
//           <h2>Parking Statistics</h2>
//       </div>

//       {/* page content */}
      

//     </>
//   );
// }
import { useEffect } from 'react';
import { Chart } from 'chart.js';
import lots from '../styles/lots.module.css'
import stats from '../styles/stats.module.css'
import Head from "next/head"


function Bar() {
    useEffect(() => {
        var mondayCtx = document.getElementById('mondayChart').getContext('2d');
        var mondayChart = new Chart(mondayCtx, {
            type: 'line',
            data: {
                labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
                datasets: [{
                    data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
                    label: "Empty parking spaces",
                    // borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(39, 63, 150, 0.5)",
                    // borderWidth: 1
                }]
            },
            // options: {  
            //     plugins: {
            //         legend: {
            //             display: false
            //         }
            //     }
            // }
        });

        // second chart
        var tuesdayCtx = document.getElementById('tuesdayChart').getContext('2d');
        var tuesdayChart = new Chart(tuesdayCtx, {
            type: 'line',
            data: {
              labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
              datasets: [{
                  data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
                  label: "Empty parking spaces",
                  // borderColor: "rgb(109, 253, 181)",
                  backgroundColor: "rgb(39, 63, 150, 0.5)",
                  // borderWidth: 1
              }]
          },
        });


        var wednesdayCtx = document.getElementById('wednesdayChart').getContext('2d');
        var wednesdayChart = new Chart(wednesdayCtx, {
            type: 'line',
            data: {
              labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
              datasets: [{
                  data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
                  label: "Empty parking spaces",
                  // borderColor: "rgb(109, 253, 181)",
                  backgroundColor: "rgb(39, 63, 150, 0.5)",
                  // borderWidth: 1
              }]
          },
        });

        var thursdayCtx = document.getElementById('thursdayChart').getContext('2d');
        var thursdayChart = new Chart(thursdayCtx, {
            type: 'line',
            data: {
              labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
              datasets: [{
                  data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
                  label: "Empty parking spaces",
                  // borderColor: "rgb(109, 253, 181)",
                  backgroundColor: "rgb(39, 63, 150, 0.5)",
                  // borderWidth: 1
              }]
          },
        });

        var fridayCtx = document.getElementById('fridayChart').getContext('2d');
        var fridayChart = new Chart(fridayCtx, {
            type: 'line',
            data: {
              labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
              datasets: [{
                  data: [2, 1, 1, 6, 4, 7, 8, 14, 13],
                  label: "Empty parking spaces",
                  // borderColor: "rgb(109, 253, 181)",
                  backgroundColor: "rgb(39, 63, 150, 0.5)",
                  // borderWidth: 1
              }]
          },
        });
    }, [])

    return (
        <>
        <Head>
      <link rel="icon" href="/latech.ico"/>
      <title>Parking Statistics</title>
    </Head>
            {/* browser tab name */}
            
            
            {/* sidebar */}
            <div className={lots.sidebar}>
                <a className='active' href='/'>Home</a>
                <a href='/lots'>Available Parking</a>
                <a href='/stats'>Parking Statistics</a>
                <a href='/help'>Help</a>
            </div>

            {/* title */}
            <div className={lots.navbar}>
                <h2>Parking Statistics</h2>
            </div>

            {/* page content */}
            {/* bar chart */}
            {/* <div> */}
            <div className={stats.chart}>
                <h2>Monday</h2>
                <canvas id='mondayChart'></canvas>
            </div>
            {/* <br/> */}
            <div className={stats.chart}>
                <h2>Tuesday</h2>
                <canvas id='tuesdayChart'></canvas>
            </div>

            <div className={stats.chart}>
                <h2>Wednesday</h2>
                <canvas id='wednesdayChart'></canvas>
            </div>

            <div className={stats.chart}>
                <h2>Thursday</h2>
                <canvas id='thursdayChart'></canvas>
            </div>

            <div className={stats.chart}>
                <h2>Friday</h2>
                <canvas id='fridayChart'></canvas>
            </div>
            {/* </div> */}
        </>
    )
}

export default Bar;