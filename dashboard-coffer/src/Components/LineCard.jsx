import React, { useState, useEffect } from 'react';
import "chart.js/auto";
import { Line } from "react-chartjs-2"; // Import Bar component instead of Line
import axios from 'axios';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function LineCard() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/intensity');
      const jsonData = response.data;
   
      const intensityData = jsonData.map((item, index) => ({ x: item.intensity, y: index }));
      const years = jsonData.map(item => item.start_year);

      const getColor = (value) => {
        const colors = [
          '#7F00FF', // Green
          '#F2B93B', // Yellow
          '#FF8000', // Orange
          '#FF453A', // Red
        ];

        const threshold = Math.max(...intensityData) / 4;
        if (value < threshold) {
          return colors[0];
        } else if (value < threshold * 2) {
          return colors[1];
        } else if (value < threshold * 3) {
          return colors[2];
        } else {
          return colors[3];
        }
      };

      const backgroundColors = intensityData.map((value) => getColor(value));

      const newChartData = {
        labels: years,
        datasets: [
          {
            label: 'Intensity',
            backgroundColor: backgroundColors,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: intensityData.map(item => item.x),
          },
        ],
      };

      setChartData(newChartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const chartOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: (value) => Math.round(value * 100) / 100 // example formatting
      }
    }
  };
  
  return (
    <div className="h-[24rem] bg-gray-50 p-4 rounded border border-gray-200 flex flex-col flex-1">
      <div className=" w-full  flex-1  justify-center items-center">
        <strong className=' text-blue-900  underline  '>Intensity</strong>
        <div className=' bg-gray-100 rounded items-center justify-center'>
          <Line data={chartData} options={chartOptions} plugins={[ChartDataLabels]} /> {/* Use Bar component */}
        </div>
      </div>
    </div>
  );
}
