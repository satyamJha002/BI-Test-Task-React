import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styles from "./PieChartComp.module.css";

const PieChartComp = () => {
  return (
    <div className={styles["pie-chart"]}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Confiremed" },
              { id: 1, value: 15, label: "Recovered" },
              { id: 2, value: 20, label: "Deceased" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default PieChartComp;
