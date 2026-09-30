'use client';

import React, { forwardRef } from 'react';

const statsData = [
  {
    value: "98%",
    description: "Client Satisfaction"
  },
  {
    value: "150+",
    description: "Projects Delivered"
  },
  {
    value: "10x",
    description: "Performance Growth"
  }
];

const Stats = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mx-auto border-t border-white/10 pt-8 gap-8 md:gap-0"
    >
      {statsData.map((stat, index) => (
        <div key={index} className="flex flex-col gap-1 w-full md:w-1/3">
          <span className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-300">
            {stat.value}
          </span>
          <span className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest">
            {stat.description}
          </span>
        </div>
      ))}
    </div>
  );
});

Stats.displayName = 'Stats';

export default Stats;
