import Header from "../components/header/Header";
import BarChartComponent from "../components/barChart/BarChart";
import PerformanceBarChart from "../components/performanceBar/PerformanceBarChart";
import CombineChart from "../components/combineChart/CombineChart";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="max-w-8xl mr-20 ml-20  sm:px-6 lg:px-8">
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4">
            <BarChartComponent />
          </div>
          <div className="col-span-1">
            <PerformanceBarChart />
          </div>
        </div>
        <CombineChart />
      </div>
    </>
  );
}
