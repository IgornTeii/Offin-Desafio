import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <Tooltip />
        <Bar dataKey="Desempenho" fill="#4c51bf" />
      </BarChart>
    </ResponsiveContainer>
  );
}
