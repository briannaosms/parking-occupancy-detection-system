import { useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import Axios from 'axios';
import Head from "next/head"

import lots from '../styles/lots.module.css'
import stats from '../styles/stats.module.css'

import Sidebar from './sidebar';

function Bar() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
            Axios.get('http://localhost:3001/get').then((response) =>{
              console.log(response.data)
              setBackendData(response.data)
            })
          }, [])
    //const total = backendData[1].total;
    //console.log(total)
    // const NethEmpty = 30-total


    //monday chart data
    var nethkinData = {
        labels: backendData.map(time => time.time),
        datasets: [{
            data: backendData.map(total => 30 - (total.total)),
            label: "Empty parking spaces",
            fill: true,
            backgroundColor: "rgba(211,211,211,0.5)",
            borderColor: "rgb(211,211,211)"
        }]
    }
    // nethkin chart options
    var nethkinOptions = {
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 30,
                    ticks: {
                        color: 'Grey',
                    },
                    grid: {
                        display: true,
                    }
                },
                x: {
                    ticks: {
                        color: 'Grey',
                    }
                },
            },
            animation: {
                y: {
                  duration: 3000,
                  from: 3000
                }
            },
            
    }



    useEffect(() => {
        // var test = document.getElementById("0").getContext('2d');
        // test.destroy();
        // monday chart
        
        var ctx = document.getElementById('nethkinChart').getContext('2d');
        let nethkinChartStatus = Chart.getChart("nethkinChart");
        if (nethkinChartStatus != undefined) {
            nethkinChartStatus.destroy();
        }
        var nethkinChart = new Chart(ctx, {
            type: 'line',
            data: nethkinData,
            options: nethkinOptions,
            
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


            {/* navbar title */}
            <div className={lots.navbar}>
                <h2>Parking Statistics</h2>
            </div>


            {/* page content */}
            {/* bar charts */}
            {/* monday */}
            <div className={stats.chart}>
                <h2>Nethkin Stats</h2>
                <canvas id='nethkinChart'></canvas>
            </div>
        </>
    )
}



export default Bar;