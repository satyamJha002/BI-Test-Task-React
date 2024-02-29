import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import styles from "./BarCharComp.module.css";

const BarCharComp = () => {
  return (
    <div className={styles["bar-chart"]}>
      <BarChart
        xAxis={[
          { scaleType: "band", data: ["Confirmed", "Recovered", "Deceased"] },
        ]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default BarCharComp;
