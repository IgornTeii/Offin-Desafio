import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="bg-white p-2 shadow rounded">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function PerformanceBarChart() {
  const data = [
    { name: 'S', Desempenho: 4000 },
    { name: 'T', Desempenho: 3000 },
    { name: 'Q', Desempenho: 2000 },
    { name: 'Q', Desempenho: 2780 },
    { name: 'S', Desempenho: 1890 },
    { name: 'S', Desempenho: 2390 },
    { name: 'D', Desempenho: 3490 },
  ];

  return (
    <ResponsiveContainer width="50%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="Desempenho" fill="#4c51bf" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}