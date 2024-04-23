import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

export default function PieChartComponent() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [{ data: [] }] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/sector');
      const jsonData = response.data;

      const sectors = {};

      jsonData.forEach((entry) => {
        if (!sectors[entry.sector]) {
          sectors[entry.sector] = 0;
        }
        sectors[entry.sector]++;
      });

      const chartData = {
        labels: Object.keys(sectors),
        datasets: [
          {
            data: Object.values(sectors),
            backgroundColor: Object.keys(sectors).map((_, index) =>
              getRandomColor(index)
            ),
          },
        ],
      };

      setChartData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  return (
    <div className=' bg-gray-100 rounded items-center justify-center'>
      <strong className=' text-blue-900 mt-1 mx-1 underline'>Sector</strong>
      <Pie data={chartData} />
    </div>
  );
}
