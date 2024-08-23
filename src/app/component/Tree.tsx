'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';

const TreeChart: React.FC = () => {
  const getOption = () => {
    const data = [
      {
        name: 'Cat',
        children: [
          {
            name: 'Persian',
            children: [
              { name: 'White' },
              { name: 'Black' },
              { name: 'Cream' },
            ],
          },
          {
            name: 'Siamese',
            children: [
              { name: 'Seal Point' },
              { name: 'Blue Point' },
            ],
          },
        ],
      },
    ];

    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: data,
          orient: 'vertical', // 竖直展示
          top: '5%',
          left: '7%',
          bottom: '5%',
          right: '20%',
          symbolSize: 10,
          label: {
            position: 'top',
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 12,
          },
          leaves: {
            label: {
              position: 'bottom',
              verticalAlign: 'middle',
              align: 'center',
            },
          },
          expandAndCollapse: true,
          initialTreeDepth: 2,
          animationDuration: 550,
          animationEasing: 'cubicOut',
        },
      ],
    };
  };

  return (
    <div className="w-full h-96 md:h-screen">
      <ReactECharts option={getOption()} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default TreeChart;