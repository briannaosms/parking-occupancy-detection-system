import { useEffect } from 'react';
import { Chart } from 'chart.js';
import lots from '../styles/lots.module.css'


function Bar() {
    useEffect(() => {
        var mondayCtx = document.getElementById('mondayChart').getContext('2d');
        var mondayChart = new Chart(mondayCtx, {
            type: 'bar',
            data: {
                labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00"],
                datasets: [{
                    data: [6, 13, 23, 4, 9, 12, 31],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
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
            type: 'bar',
            data: {
                labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00"],
                datasets: [{
                    data: [6, 13, 23, 4, 9, 12, 31],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(39, 63, 150, 0.5)",
                    // borderWidth: 1
                }]
            },
        });

    }, [])

    return (
        <>
            {/* browser tab name */}
            <title>Parking Statistics</title>
            
            {/* sidebar */}
            <div className={lots.sidebar}>
                <a className='active' href='/'>Home</a>
                <a href='/lots'>Available Parking</a>
                <a href='/bar'>Parking Statistics</a>
                <a href='/help'>Help</a>
            </div>

            {/* title */}
            <div className={lots.navbar}>
                <h2>Parking Statistics</h2>
            </div>

            {/* page content */}
            {/* bar chart */}
            <h2>Monday</h2>
            {/* <div> */}
            <div>
                <canvas id='mondayChart'></canvas>
            </div>
            <br/>
            <h2>Tuesday</h2>
            <div>
                <canvas id='tuesdayChart'></canvas>
            </div>
            {/* </div> */}
        </>
    )
}

export default Bar;