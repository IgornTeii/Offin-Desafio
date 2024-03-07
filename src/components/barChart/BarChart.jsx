import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartComponent() {
  const data = [
    { name: 'Categoria1', Categorias: 4000, Meta: 2400 },
    { name: 'Categoria2', Categorias: 3000, Meta: 1398 },
    { name: 'Categoria3', Categorias: 2000, Meta: 9800 },
    { name: 'Categoria4', Categorias: 2780, Meta: 3908 },
    { name: 'Categoria5', Categorias: 1890, Meta: 4800 },
    { name: 'Categoria6', Categorias: 2390, Meta: 3800 },
    { name: 'Categoria7', Categorias: 3490, Meta: 4300 },
    { name: 'Categoria8', Categorias: 3000, Meta: 2400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Categorias" fill="#8884d8" />
        <Bar dataKey="Meta" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}