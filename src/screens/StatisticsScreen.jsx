import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Colors from "../components/Colors";
import React from "react";
import Generatebutton from "../components/Generatebutton";
import Defaults from "../components/Defaults";
import Devicedropdown from "../components/Devicedropdown";
import mockData from "../data/mock.json";
import Chart from "../components/chart";

export default function StatisticScreen() {
  // const { factors } = mockData;

  // const readingsHistory = [
  //   {
  //     time: "8AM",
  //     acidity: 6.2,
  //     tds: 320,
  //     temperature: 92,
  //   },
  //   {
  //     time: "9AM",
  //     acidity: 6.4,
  //     tds: 300,
  //     temperature: 91,
  //   },
  //   {
  //     time: "10AM",
  //     acidity: 5.9,
  //     tds: 340,
  //     temperature: 95,
  //   },
  //   {
  //     time: "11AM",
  //     acidity: 6.5,
  //     tds: 280,
  //     temperature: 93,
  //   },
  //   {
  //     time: "12PM",
  //     acidity: 6.1,
  //     tds: 260,
  //     temperature: 90,
  //   },
  // ];

  // const calculateScore = (value, min, max) => {
  //   if (value >= min && value <= max) return 100;

  //   const range = max - min;

  //   if (value < min) {
  //     return Math.max(0, 100 - ((min - value) / range) * 100);
  //   } else {
  //     return Math.max(0, 100 - ((value - max) / range) * 100);
  //   }
  // };


  // const chartData = readingsHistory.map((reading) => {
  //   const acidityScore = calculateScore(
  //     reading.acidity,
  //     factors.idealRanges.acidity.min,
  //     factors.idealRanges.acidity.max
  //   );

  //   const tdsScore = calculateScore(
  //     reading.tds,
  //     factors.idealRanges.tds.min,
  //     factors.idealRanges.tds.max
  //   );

  //   const tempScore = calculateScore(
  //     reading.temperature,
  //     factors.idealRanges.temperature.min,
  //     factors.idealRanges.temperature.max
  //   );

  //   const qualityScore = Math.round(
  //     acidityScore * factors.acidityWeight +
  //       tdsScore * factors.tdsWeight +
  //       tempScore * factors.temperatureWeight
  //   );

  //   return {
  //     time: reading.time,
  //     qualityScore,
  //   };
  // });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Statistics</h2>

      {/* Dropdown */}
      <div style={styles.dropdownWrapper}>
        <Devicedropdown />
      </div>

      {/* Chart */}
      <Chart/>

      {/* Button */}
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
    width: "100%",
    maxWidth: "800px",
    marginBottom: "500px",
    marginTop: "-80px",
    gap: "20px",

  },

  title: {
    color: Colors.white,
    fontFamily: Defaults.fontFamily,
  },

  dropdownWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },

  // chartWrapper: {
  //   width: "100%",
  //   height: "300px",
  //   backgroundColor: Colors.cardColor,
  //   borderRadius: "12px",
  //   padding: "20px",
  // },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "10px",
  },
};