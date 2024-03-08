
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
          <div className="flex mb-2"> 
            <div className="w-4/5 pr-2"> 
              <BarChartComponent />
            </div>
            <div className="w-1/5 pl-2"> 
              <PerformanceBarChart />
            </div>
          </div>
          <div className="flex-grow">
            <CombineChart />
          </div>
        </div>
      </div>
    </>
  );
}