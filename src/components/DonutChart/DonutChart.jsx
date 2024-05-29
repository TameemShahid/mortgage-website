import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {

  const options = {
    plugins: {
      legend: {
        display: false, // Disable the default legend
      },
      tooltip: {
        enabled: false,
      }
    },
  };

  return (
    <div className="donut-chart-container">
      <div className="chart">
        <Doughnut data={data} options={options} />
      </div>
      <div className="legend">
        {data.labels.map((label, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
