import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Colors from "../components/Colors";
import React, { useState } from "react";
import Generatebutton from "../components/Generatebutton";
import mockData from "../data/mock.json";
import Defaults from "../components/Defaults";

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
      
      <h2 style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}>
        STATISTICS 
      </h2>

      {/* Graph */}
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke={Colors.white} />
              <YAxis stroke={Colors.white} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={Colors.white}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>

          {/* Button wrapper */}
          <div style={styles.buttonWrapper}>
            <Generatebutton />
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
    marginBottom: "80px",
  },

  chartWrapper: {
    width: "100%",
    height: "300px",
    backgroundColor: Colors.cardColor, 
    borderRadius: "12px",
    padding: "20px",
  },

  buttonWrapper: {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
},
};