import React from 'react';
import { Link } from 'react-router-dom';

const dashboardData = [
  {
    id: '1',
    obj_id: '714a30fca',
    sector: 'Energy',
    intensity: 'High',
    topic: 'Oil Price Analysis',
    shipment_address: 'United States of America'
  },
  {
    id: '2',
    obj_id: '30fca0d2fe',
    sector: 'Environment',
    intensity: 'Medium',
    topic: 'Renewable Energy Initiatives',
    shipment_address: 'Nigeria'
  },
  {
    id: '3',
    obj_id: '543465d71',
    sector: 'Government',
    intensity: 'Low',
    topic: 'Policy Implementation',
    shipment_address: 'Nigeria'
  },
  {
    id: '4',
    obj_id: '985465d71',
    sector: 'Aerospace & defence',
    intensity: 'High',
    topic: 'Defense Contracts',
    shipment_address: 'United States of America'
  },
  {
    id: '5',
    obj_id: '56265d714',
    sector: 'Energy',
    intensity: 'High',
    topic: 'Oil Production Forecast',
    shipment_address: 'United States of America'
  }
];

export default function DashboardTable() {
  return (
    <div className="bg-gray-50  px-4 pt-3 pb-4 rounded border border-gray-200 flex-1">
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Object ID</th>
              <th>Sector</th>
              <th>Intensity</th>
              <th>Topic</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/product/${item.obj_id}`}>#{item.obj_id}</Link>
                </td>
                <td>{item.sector}</td>
                <td>{item.intensity}</td>
                <td>{item.topic}</td>
                <td>{item.shipment_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
