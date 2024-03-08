import { BarChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function App() {
  const data = [
    { month: 'Jan', Faturamento: 4000, Meta: 2400 },
    { month: 'Fev', Faturamento: 3000, Meta: 1398 },
    { month: 'Mar', Faturamento: 2000, Meta: 2200 },
    { month: 'Abr', Faturamento: 2780, Meta: 3908 },
    { month: 'Mai', Faturamento: 1890, Meta: 4800 },
    { month: 'Jun', Faturamento: 2390, Meta: 3800 },
    { month: 'Jul', Faturamento: 3490, Meta: 4300 },
    { month: 'Ago', Faturamento: 3000, Meta: 2400 },
    { month: 'Set', Faturamento: 2000, Meta: 3000 },
    { month: 'Out', Faturamento: 2780, Meta: 3908 },
    { month: 'Nov', Faturamento: 1890, Meta: 4800 },
    { month: 'Dez', Faturamento: 2000, Meta: 4200 },
  ];

  console.log('Renderizando o gráfico com os dados:', data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Faturamento" fill="#8884d8" />
        <Line type="monotone" dataKey="Meta" stroke="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
