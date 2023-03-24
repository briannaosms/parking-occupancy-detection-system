import { useEffect } from 'react';
import { Chart } from 'chart.js';

function Bar() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00"],
                datasets: [{
                    data: [6, 13, 23, 4, 9, 12, 31],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181, 0.5)",
                    borderWidth: 3
                }
                ]
            },
        });
    }, [])

    return (
        <>
            {/* bar chart */}
            <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Bar Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Bar;