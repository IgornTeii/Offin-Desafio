import Header from "../components/header/Header";
import BarChartComponent from "../components/barChart/BarChart";
import PerformanceBarChart from "../components/performanceBar/PerformanceBarChart";
import CombineChart from "../components/combineChart/CombineChart";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <BarChartComponent />
          <PerformanceBarChart />
        </div>
        <CombineChart />
      </div>
    </>
  );
}