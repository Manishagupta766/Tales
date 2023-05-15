import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ExportHistogramData from './ExportHistogramData';

const Histogram = ({ wordCount }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const sortedWords = Object.keys(wordCount).sort(
      (a, b) => wordCount[b] - wordCount[a]
    );
    const labels = sortedWords.slice(0, 20);

    const data = labels.map((word) => wordCount[word]);

    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Occurrences',
            data,
            backgroundColor: 'rgba( 0, 138, 139 )',
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: { 
          y: {
            beginAtZero: true,
            maxBarThickness: 50, 
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [wordCount]);

  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );
  const labels = sortedWords.slice(0, 20);
  const data = labels.map((word) => wordCount[word]);

  return (
    <div style={{ backgroundColor: '#f1f1f1', padding: '20px' }}>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>
        Click 👇 for a CSV file of the histogram data.
      </h2>
      <ExportHistogramData labels={labels} data={data} />
      <h3 style={{ color: '#333', marginTop: '20px', marginBottom: '10px' }}>
        Graph of the 20 most occurring words:
      </h3>
      <canvas ref={chartRef} width="1000" height="600" />
    </div>
  );
};

export default Histogram;
