import "../css/main.scss";
import Header from "../components/Header";
import PerformanceSec from "../components/PerformanceSec";
import "./business.scss";

export default function BusinessPerformance() {
  return (
    <>
      <Header pages={"Business Performance"} />
      <PerformanceSec />
    </>
  );
}
