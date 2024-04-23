import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from "react-chartjs-2";

export default function DoughnutCard() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/regions');
      const jsonData = response.data;

      const labels = Object.keys(jsonData);
      const data = Object.values(jsonData);

      const newChartData = {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4CAF50',
              '#FF9800',
              '#9C27B0',
              '#3F51B5',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4CAF50',
              '#FF9800',
              '#9C27B0',
              '#3F51B5',
            ],
          },
        ],
      };

      setChartData(newChartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="w-[20rem] h-[24rem] bg-gray-50 p-4 rounded border border-gray-200 flex flex-col">
      <div className="mt-3 w-full flex-1 text-xs">
        <div className='bg-gray-100 rounded items-center justify-center'> 
          <strong className='text-blue-900 mt-3 mx-2 underline'>Region Distribution</strong>
          <Doughnut data={chartData} />
        </div>
      </div>
    </div>
  );
}
