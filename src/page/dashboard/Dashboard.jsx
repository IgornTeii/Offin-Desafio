import Header from "../../components/header/Header";
import BarChartComponent from "../../components/barChart/BarChart";
import PerformanceBarChart from "../../components/performanceBar/PerformanceBarChart";
import CombineChart from "../../components/combineChart/CombineChart";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        </div>
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-12 lg:col-span-10">
            <BarChartComponent />
          </div>
          <div className="col-span-12 lg:col-span-2">
            <PerformanceBarChart />
          </div>
        </div>
        <div className="mt-4">
          <CombineChart />
        </div>
      </div>
    </>
  );
}
