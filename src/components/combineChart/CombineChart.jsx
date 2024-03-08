
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      type: 'line',
      label: 'Meta (ano)',
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 2,
      fill: false,
      data: [20, 30, 50, 40, 60, 70, 60, 80, 75, 90, 100, 110],
    },
    {
      type: 'bar',
      label: 'Faturamento',
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: 'white',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
    }
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Faturamento x Meta (ano)',
    },
  },
};

const ChartComponent = () => {
  return (
    <div className="justify-center items-center bg-white p-6 rounded-xl shadow-lg h-96 overflow-hidden"> 
      <div className="w-full h-full">
        <Bar data={data} options={{...options, maintainAspectRatio: false}} />
      </div>
    </div>
  );
};

export default ChartComponent;