export default function Header() {
  const quantidadeVendida = '12.350';
  const metaFaturamento = 'R$ 170.000,00';
  const valorVendido = 'R$ 145.000,00';
  const eficiencia = '85%';

  return (
    <header>
      <div className="max-w-9xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <DataCard title="Quantidade Vendida" value={quantidadeVendida} />
          <DataCard title="Meta de faturamento (R$)" value={metaFaturamento} />
          <DataCard title="Valor vendido (R$)" value={valorVendido} />
          <DataCard title="Eficiência operacional (%)" value={eficiencia} />
        </div>
      </div>
    </header>
  );
}

const DataCard = ({ title, value }) => {
  return (
    <div className="lg:flex-1 text-center bg-white p-5 m-2 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-700">{title}</h2>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
