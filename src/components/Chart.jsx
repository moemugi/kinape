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
import Defaults from "../components/Defaults";
import mockData from "../data/mock.json";

export default function Chart() {

  const { factors } = mockData;

  const readingsHistory = [
    {
      time: "8AM",
      acidity: 6.2,
      tds: 320,
      temperature: 92,
    },
    {
      time: "9AM",
      acidity: 6.4,
      tds: 300,
      temperature: 91,
    },
    {
      time: "10AM",
      acidity: 5.9,
      tds: 340,
      temperature: 95,
    },
    {
      time: "11AM",
      acidity: 6.5,
      tds: 280,
      temperature: 93,
    },
    {
      time: "12PM",
      acidity: 6.1,
      tds: 260,
      temperature: 90,
    },
  ];

  const calculateScore = (value, min, max) => {
    if (value >= min && value <= max) return 100;

    const range = max - min;

    if (value < min) {
      return Math.max(0, 100 - ((min - value) / range) * 100);
    } else {
      return Math.max(0, 100 - ((value - max) / range) * 100);
    }
  };


  const chartData = readingsHistory.map((reading) => {
    const acidityScore = calculateScore(
      reading.acidity,
      factors.idealRanges.acidity.min,
      factors.idealRanges.acidity.max
    );

    const tdsScore = calculateScore(
      reading.tds,
      factors.idealRanges.tds.min,
      factors.idealRanges.tds.max
    );

    const tempScore = calculateScore(
      reading.temperature,
      factors.idealRanges.temperature.min,
      factors.idealRanges.temperature.max
    );

    const qualityScore = Math.round(
      acidityScore * factors.acidityWeight +
        tdsScore * factors.tdsWeight +
        tempScore * factors.temperatureWeight
    );

    return {
      time: reading.time,
      qualityScore,
    };
  });

  return  (
    // {/* Chart */}
      <div style={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" stroke={Colors.white} />

            <YAxis
              stroke={Colors.white}
              domain={[0, 100]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="qualityScore"
              stroke={Colors.linegraphcolor}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}

const styles = {
  
  chartWrapper: {
    width: "100%",
    height: "300px",
    backgroundColor: Colors.cardColor,
    borderRadius: "12px",
    padding: "20px",
  },

};