import React from "react";
import CardComp from "./CardComp/CardComp";
import BarCharComp from "./BarCharComp/BarCharComp";
import PieChart from "./PieChartComp/PieChart";
import styles from "./Dashboard.module.css";
import LineChart from "./LineChart/LineChart";

const Dashboard = () => {
  return (
    <div>
      <CardComp />
      <div className={styles["charts"]}>
        <BarCharComp />
        <PieChart />
      </div>
      <LineChart />
    </div>
  );
};

export default Dashboard;
