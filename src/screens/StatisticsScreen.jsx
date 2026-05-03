import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Colors from "../components/Colors";

export default function StatisticScreen() {
  
  const data = [
    { name: "Mon", value: 2 },
    { name: "Tue", value: 4 },
    { name: "Wed", value: 3 },
    { name: "Thu", value: 5 },
    { name: "Fri", value: 6 },
    { name: "Sat", value: 4 },
    { name: "Sun", value: 7 },
  ];

  return (
    <div style={styles.container}>
      <h1>STATISTICS SCREEN</h1>

      {/* Graph */}
      <div style={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke= {Colors.white} />
            <YAxis stroke= {Colors.white} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke= {Colors.white}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },

  chartWrapper: {
    width: "100%",
    height: "300px",
    backgroundColor: Colors.cardColor, 
    borderRadius: "12px",
    padding: "20px",
  },
};