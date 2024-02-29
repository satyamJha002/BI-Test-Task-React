import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        const da = result.json();
        setData(da);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: 24 }}>
        {/* Add your app content here */}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
