import { useEffect, useState, useMemo } from 'react';
import { Chart } from 'chart.js/auto';
import 'chartjs-adapter-moment';
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
    
    const tuesdayTimeArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Tuesday') tuesdayTimeArr.push(backendData[key].Time)})
    //console.log(tuesdayTimeArr)

    const tuesdayStudentDataArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Tuesday') tuesdayStudentDataArr.push(backendData[key].MeanStudent)})

    // const tuesdayVisitorDataArr = []
    // Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Tuesday') tuesdayVisitorDataArr.push(backendData[key].MeanVisitor)})

    // const tuesdayFacultyDataArr = []
    // Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Tuesday') tuesdayFacultyDataArr.push(backendData[key].MeanFaculty)})

    // const tuesdayHandicappedDataArr = []
    // Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Tuesday') tuesdayHandicappedDataArr.push(backendData[key].MeanHandicapped)})

    //monday chart data
    var tuesdayNethkenData = useMemo(() => {
        return {
            labels: tuesdayTimeArr,
            //labels: backendData.map(day => day.Day),
            datasets: [{
                data: tuesdayStudentDataArr,
                label: "Empty Student Spaces",
                fillColor: "blue",
                },
                // {
                //     data:tuesdayFacultyDataArr,
                //     label: "Empty Faculty Spaces",
                //     fillColor: "red",
                // },
                // {
                //     data: tuesdayVisitorDataArr,
                //     label: "Empty Visitor Spaces",
                //     fillColor: "red",
                // },
                // {
                //     data: tuesdayHandicappedDataArr,
                //     label: "Empty Handicapped Spaces",
                //     fillColor: "grey",
                // }
            ]
        }
    }, [backendData]);

    const wednesdayTimeArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Wednesday') wednesdayTimeArr.push(backendData[key].Time)})

    const wednesdayDataArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Wednesday') wednesdayDataArr.push(backendData[key].MeanStudent)})
    //console.log(tuesdayTimeArr)

    //monday chart data
    var wednesdayNethkenData = useMemo(() => {
        return {
            labels: wednesdayTimeArr,
            //labels: backendData.map(day => day.Day),
            datasets: [{
                data: wednesdayDataArr,
                label: "Empty Student Spaces",
                fillColor: "blue",
            }]
        }
    }, [backendData]);

    const thursdayTimeArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Thursday') thursdayTimeArr.push(backendData[key].Time)})

    const thursdayDataArr = []
    Object.keys(backendData).forEach(key => { if ( backendData[key].Day == 'Thursday') thursdayDataArr.push(backendData[key].MeanStudent)})
    //console.log(tuesdayTimeArr)

    //monday chart data
    var thursdayNethkenData = useMemo(() => {
        return {
            labels: thursdayTimeArr,
            //labels: backendData.map(day => day.Day),
            datasets: [{
                data: thursdayDataArr,
                label: "Empty Student Spaces",
                fillColor: "blue",
            }]
        }
    }, [backendData]);
    // nethken chart options
    var nethkenOptions = {
            scales: {
                y: {
                    min: 0,
                    max: 30,
                    ticks: {
                        color: 'Grey',
                    },
                    grid: {
                        display: true,
                    }
                },
                x: {
                    //type: 'time',
                    ticks: {
                        //maxTicksLimit: 25,
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
        
        var ctx = document.getElementById('tuesdayNethkenChart').getContext('2d');
        let tuesdayNethkenChartStatus = Chart.getChart("tuesdayNethkenChart");
        if (tuesdayNethkenChartStatus != undefined) {
            tuesdayNethkenChartStatus.destroy();
        }
        var tuesdayNethkenChart = new Chart(ctx, {
            type: 'bar',
            data: tuesdayNethkenData,
            options: nethkenOptions,
            
        });

        var ctx = document.getElementById('wednesdayNethkenChart').getContext('2d');
        let wednesdayNethkenChartStatus = Chart.getChart("wednesdayNethkenChart");
        if (wednesdayNethkenChartStatus != undefined) {
            wednesdayNethkenChartStatus.destroy();
        }
        var wednesdayNethkenChart = new Chart(ctx, {
            type: 'bar',
            data: wednesdayNethkenData,
            options: nethkenOptions,
            
        });

        var ctx = document.getElementById('thursdayNethkenChart').getContext('2d');
        let thursdayNethkenChartStatus = Chart.getChart("thursdayNethkenChart");
        if (thursdayNethkenChartStatus != undefined) {
            thursdayNethkenChartStatus.destroy();
        }
        var thursdayNethkenChart = new Chart(ctx, {
            type: 'bar',
            data: thursdayNethkenData,
            options: nethkenOptions,
            
        });
    }, [tuesdayNethkenData])

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
                <h2 className={lots.text}>Parking Statistics</h2>
            </div>

            <div className={stats.title}><b>Nethken Lot</b></div>
            <div className={stats.promptline}><hr></hr></div>
            {/* page content */}
            {/* bar charts */}
            {/* monday */}
            <div className={stats.chart}>
                <h3>Tuesday</h3>
                <canvas id='tuesdayNethkenChart'></canvas>
            </div>

            <div className={stats.chart}>
                <h3>Wednesday</h3>
                <canvas id='wednesdayNethkenChart'></canvas>
            </div>

            <div className={stats.chart}>
                <h3>Thursday</h3>
                <canvas id='thursdayNethkenChart'></canvas>
            </div>
        </>
    )
}

export default Bar;