import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['1/7', '8/7', '15/7', '22/7', '29/7', '5/8', '12/8', '19/8', '26/8', '2/9', '9/9', '16/9', '23/9', '30/9',],
        datasets: [
            {
                label: 'Attendance',
                data: [65, 59, 80, 81, 56, 55, 40, 60, 10, 90, 30, 70, 20, 50],
                fill: false,
                borderColor: '#ab59d4',
                tension: 0,
                pointRadius: 4,  // Adjust the size of the points
              // Adjust the border width of the points
                pointBackgroundColor: '#2c384b',  // Optional: Set point background color
               
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
        },
        title: {
            display: false, // Hides the global title
            text: 'Attendance'
          },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Weeks'
                }
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Attendance'
                },
                ticks: {
                    stepSize: 25,
                    callback: function (value: any) {
                        return value + '%';
                    },
                },
            },

        }
    };

    return (
        <div>
           
            <Line data={data} options={options} height={80} />
        </div>
    );
};

export default LineChart;
