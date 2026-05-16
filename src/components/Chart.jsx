import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Colors from "../components/Colors";
import { supabase } from "../components/supabase";
import React, { useEffect, useState } from "react";

export default function Chart() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchQualityScores();
  }, []);

  const fetchQualityScores = async () => {

    const { data, error } = await supabase
      .from("quality_scores")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log("Error fetching quality scores:", error);
      return;
    }

    const formattedData = data.map((item, index) => ({
      time: `Reading ${index + 1}`,
      qualityScore: item.quality_score,
    }));

    setChartData(formattedData);
  };

  return (
    <div style={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>

          <XAxis
            dataKey="time"
            stroke={Colors.white}
          />

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