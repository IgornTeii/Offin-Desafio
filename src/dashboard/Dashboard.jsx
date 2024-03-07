import Header from "../components/header/Header";
import BarChartComponent from "../components/barChart/BarChart";
import PerformanceBarChart from "../components/performanceBar/PerformanceBarChart";

export default function Dashboard() {
  return (
    <>
      <Header />
      <BarChartComponent />
      <PerformanceBarChart />
    </>
  );
}