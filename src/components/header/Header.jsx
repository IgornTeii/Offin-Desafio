import PropTypes from 'prop-types';

export default function Header() {
  const quantidadeVendida = '12.350';
  const metaFaturamento = 'R$ 170.000,00';
  const valorVendido = 'R$ 145.000,00';
  const eficiencia = '85%';

  const DataCard = ({ title, value }) => {
    return (
      <div className="lg:flex-1 text-center bg-white p-2 m-1 rounded-lg shadow">
        <h2 className="text-lg font-medium text-gray-700">{title}</h2>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
    );
  }

  DataCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  return (
    <header>
      <div className="max-w-9xl ml-12 mr-12 px-4 sm:px-6 lg:px-">
        <div className="lg:flex lg:items-center lg:justify-between p-6">
          <DataCard title="Quantidade Vendida" value={quantidadeVendida} />
          <DataCard title="Meta de faturamento (R$)" value={metaFaturamento} />
          <DataCard title="Valor vendido (R$)" value={valorVendido} />
          <DataCard title="Eficiência operacional (%)" value={eficiencia} />
        </div>
      </div>
    </header>
  );
}