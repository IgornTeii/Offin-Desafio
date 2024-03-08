import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow rounded">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    name: PropTypes.string,
  })),
  label: PropTypes.string,
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
    <div className="bg-white  rounded-lg shadow-lg mb-4">
      <h2 className="text-l font-semibold ">Desempenho por dia da  semana</h2>
    <ResponsiveContainer width="100%" height={300}>
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
    </div>
  );
}