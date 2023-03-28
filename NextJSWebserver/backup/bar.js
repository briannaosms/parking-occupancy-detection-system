import { useEffect } from 'react';
import { Chart } from 'chart.js';

// const config = {
//     type: 'line',
//     data: {
//         labels: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00", "03:00"],
//         datasets: [{
//             // borderSkipped: "true",
//             // barPercentage: 0.5,
//             // barThickness: 25,
//             // inflateAmount: "auto",
//             barPercentage: 1,
//             categoryPercentage: 1,
//             // maxBarThickness: 8,
//             // minBarLength: 2,
//             data: [6, 13, 23, 51, 9, 79, 31, 28, 29],
//             label: "Empty Parking",
//             borderColor: "rgb(109, 253, 181)",
//             backgroundColor: "rgb(109, 253, 181, 0.5)",
//             borderWidth: 1,
//             // color: "blue",
//         }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         tooltip: {
//           mode: 'index',
//           intersect: false
//         },
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart'
//         }
//       },
//       hover: {
//         mode: 'index',
//         intersec: false
//       },
//       scales: {
//         x: {
//           title: {
//             display: true,
//             text: 'Month'
//           }
//         },
//         y: {
//           title: {
//             display: true,
//             text: 'Value'
//           },
//           min: 0,
//           max: 100,
//           ticks: {
//             // forces step size to be 50 units
//             stepSize: 50
//           }
//         }
//       }
//     },
//   };

// // var options = {
// //     responsive: true,
// //     plugins: {
// //         tooltip: {
// //             mode: 'index',
// //             intersect: false
// //         }
// //     },
// //     scales: {
// //         x: {
// //             // type: 'time',
// //             // time: {
// //             //     tooltipFormat: 'T'
// //             // },
// //             type: "linear",
// //           title: {
// //             display: true,
// //             text: 'Month'
// //           }
// //         },
// //         y: {
// //           title: {
// //             display: true,
// //             text: 'Value'
// //           },
// //           min: 0,
// //           max: 100,
// //           ticks: {
// //             // forces step size to be 50 units
// //             stepSize: 50
// //           }
// //         }
// //       },
// //     // scales: {
// //     //     xAxis: {
// //     //         // display: true,
// //     //         // title: "Empty spaces"
// //     //     },
// //     //     yAxis: {
// //     //         // display: true,
// //     //         min: "0",
// //     //         max: "50",
// //     //         ticks: {
// //     //             stepSize: 3,
// //     //         }
// //     //     }
// //     // },
// // };



function Bar() {
    useEffect(() => {
        var ctx = document.getElementById('chart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00", "03:00"],
                datasets: [{
                    // borderSkipped: "true",
                    // barPercentage: 0.5,
                    // barThickness: 25,
                    // inflateAmount: "auto",
                    barPercentage: 1,
                    categoryPercentage: 1,
                    // maxBarThickness: 8,
                    // minBarLength: 2,
                    data: [6, 13, 23, 51, 9, 79, 31, 28, 29],
                    label: "Empty Parking",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181, 0.5)",
                    // borderWidth: 1,
                    // color: "blue",
                }]
            }
        });
    }, [])

    return (
        <>
            {/* bar chart */}
            <h1>Bar Chart</h1>
            <div>
                <div>
                    <canvas id='chart' width="150" height="50"></canvas>
                </div>
            </div>
        </>
        
    )
}


export default Bar;

// // const labels = ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00"];
// // const data = {
// //   labels: labels,
// //   datasets: [{
// //     label: 'My First Dataset',
// //     data: [65, 59, 80, 81, 56, 55, 40],
// //     backgroundColor: [
// //       'rgba(255, 99, 132, 0.2)',
// //       'rgba(255, 159, 64, 0.2)',
// //       'rgba(255, 205, 86, 0.2)',
// //       'rgba(75, 192, 192, 0.2)',
// //       'rgba(54, 162, 235, 0.2)',
// //       'rgba(153, 102, 255, 0.2)',
// //       'rgba(201, 203, 207, 0.2)'
// //     ],
// //     borderColor: [
// //       'rgb(255, 99, 132)',
// //       'rgb(255, 159, 64)',
// //       'rgb(255, 205, 86)',
// //       'rgb(75, 192, 192)',
// //       'rgb(54, 162, 235)',
// //       'rgb(153, 102, 255)',
// //       'rgb(201, 203, 207)'
// //     ],
// //     borderWidth: 1
// //   }]
// // };

// // const config = {
// //     type: 'bar',
// //     data: data,
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     },
// //   };

// // module.exports = {
// //     actions: [],
// //     config: config,
// // };