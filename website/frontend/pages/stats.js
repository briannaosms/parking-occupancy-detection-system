import { useEffect, useState, useMemo } from 'react';
import { Chart } from 'chart.js/auto';
import Axios from 'axios';
import Head from "next/head"

import lots from '../styles/lots.module.css'
import stats from '../styles/stats.module.css'

import Sidebar from './sidebar';

function Bar() {
    // backendData is the variable that will receive data from api
    const [backendData, setBackendData] = useState([])

    useEffect(() => {
            /*Axios.get('http://localhost:3001/get').then((response) =>{
              console.log(response.data)
              setBackendData(response.data)
            })*/
        async function getParkingLotData() {
            // Where the api data is located
            const apiUrlEndpoint = 'https://latechpods.vercel.app/api/nethken_stats';
            // Where the response from the endpoint will be fetched
            const response = await fetch(apiUrlEndpoint);
            // Where the api data from the response will be stored as a JSON Object
            const res = await response.json();
            //console.log(res);
            console.log(res.results);
            // Where the api data is stored in the backendData variable
            // From Object to array by setting to .results
            setBackendData(res.results);
        }
        // Function call
        getParkingLotData();
    }, [])
    // const total = backendData[1].total;
    // console.log(total)
    // const NethEmpty = 30-total


    //monday chart data
    var nethkenData = useMemo(() => {
        return {
            labels: backendData.map(time => time.time),
            datasets: [{
                data: backendData.map(total => (total.total)),
                label: "Empty parking spaces",
                fill: true,
                backgroundColor: "rgba(211,211,211,0.5)",
                borderColor: "rgb(211,211,211)"
            }]
        }
    }, [backendData]);
    // nethken chart options
    var nethkenOptions = {
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
        
        var ctx = document.getElementById('nethkenChart').getContext('2d');
        let nethkenChartStatus = Chart.getChart("nethkenChart");
        if (nethkenChartStatus != undefined) {
            nethkenChartStatus.destroy();
        }
        var nethkenChart = new Chart(ctx, {
            type: 'line',
            data: nethkenData,
            options: nethkenOptions,
            
        });
    }, [nethkenData])

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
                <h2>Nethken Stats</h2>
                <canvas id='nethkenChart'></canvas>
            </div>
        </>
    )
}

export default Bar;