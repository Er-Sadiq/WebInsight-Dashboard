import React from 'react';
import StatusGrid from '../Components/StatusGrid';
import LineCard from '../Components/LineCard';
import DoughnutCard from '../Components/DoughnutCard';
import Table from '../Components/Table';
import BarCard from '../Components/BarCard';

export default function Dashboard() {
  
  return (
   
    <div className='flex flex-col gap-4 '>
      <StatusGrid />
      <div className='flex flex-row gap-4 w-full'>
        <LineCard/>
        <DoughnutCard />
      </div>

      <div  className="flex flex-row gap-4 mt-2 w-full">
        <Table/>
        <BarCard />
      </div>
    </div>
  );
}
