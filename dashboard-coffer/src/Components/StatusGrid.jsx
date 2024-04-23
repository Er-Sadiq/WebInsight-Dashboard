import React from 'react'
import { IoLogoStencil , IoPieChart, IoPodiumSharp, IoTrendingUpSharp } from 'react-icons/io5'


export default function StatusGrid() {
  return (
    <div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoLogoStencil  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sector</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">60</strong>
						<span className="text-sm text-green-500 pl-2">+000</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Region</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">21</strong>
						<span className="text-sm text-green-500 pl-2">-000</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPodiumSharp className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Relevance</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">53</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoTrendingUpSharp className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Intensity</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">134</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>

  )
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
