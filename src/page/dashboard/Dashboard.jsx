
import Header from "../../components/header/Header";
import BarChartComponent from "../../components/barChart/BarChart";
import PerformanceBarChart from "../../components/performanceBar/PerformanceBarChart";
import CombineChart from "../../components/combineChart/CombineChart";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen max-h-screen overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Ajustando as margens entre os gráficos BarChart e PerformanceBarChart */}
          <div className="flex mb-2"> {/* mb-2 adiciona um pequeno espaço entre as linhas dos componentes */}
            <div className="w-4/5 pr-2"> {/* pr-2 adiciona um pequeno espaço à direita do BarChart */}
              <BarChartComponent />
            </div>
            <div className="w-1/5 pl-2"> {/* pl-2 adiciona um pequeno espaço à esquerda do PerformanceBarChart */}
              <PerformanceBarChart />
            </div>
          </div>
          
          {/* O CombineChart ocupa o restante do espaço */}
          <div className="flex-grow">
            <CombineChart />
          </div>
        </div>
      </div>
    </>
  );
}
