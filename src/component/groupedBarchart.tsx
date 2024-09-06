
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GroupedBarchart = () => {

  const data = {
    labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
    datasets: [


      {
        label: 'Completed',
        backgroundColor: '#91B07C',
        borderColor: '#91B07C',
        borderWidth: 1,
        data: [70, 90, 20, 80, 70],
        barThickness: 20,

      },
      {
        label: 'Pending',
        backgroundColor: '#E8E8E8',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        data: [50, 30, 60, 100, 80],
        barThickness: 20,

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: function (value: any) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <Bar data={data} options={options} height={80} />
  )
}

export default GroupedBarchart;