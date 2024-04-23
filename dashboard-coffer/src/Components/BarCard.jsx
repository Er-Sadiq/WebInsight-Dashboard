import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import PieCard from './PieCard';

export default function BarCard() {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/relevance');
      const jsonData = response.data;

      const relevanceData = jsonData.map(item => ({
        x: item.likelihood,
        y: item.impact,
        r: item.relevance * 5
      }));

      const intensityData = jsonData.map(item => ({
        x: item.likelihood,
        y: item.impact,
        r: item.intensity
      }));

      const chartData = {
        datasets: [
          {
            label: 'Relevance',
            data: relevanceData,
          },
          {
            label: 'Intensity',
            data: intensityData,
          }
        ]
      };

      setChartData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="w-[20rem] bg-gray-50 p-4 rounded border border-gray-200">
      <div className="mt-4 flex flex-col gap-3">
        <div className=' bg-gray-100 rounded items-center justify-center'> 
          <strong className=' text-blue-900 mt-1 mx-1 underline'>Relevance</strong>
          <Bar data={chartData} />
        </div>
        <PieCard />
      </div>
    </div>
  );
}
