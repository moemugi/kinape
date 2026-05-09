import React, { useState } from "react";
import ReadingCard from "../components/ReadingCard";
import Readbutton from "../components/Readbutton";
import Devicedropdown from "../components/Devicedropdown";
// import mockData from "../data/mock.json";
import { supabase } from "../components/supabase";


export default function MonitoringScreen() {
  const [readings, setReadings] = useState({
    acidity: 0,
    tds: 0,
    temperature: 0,
  });

  const handleRead = async () => {
  const { data, error } = await supabase
    .from("sensor_data")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.log("Error fetching data:", error);
    return;
  }

  const acidity = data.acidity;
  const tds = data.tds;
  const temperature = data.temperature;

  // calculate score here (frontend OR backend, but we do frontend for now)
  const calc = (value, min, max) => {
    if (value >= min && value <= max) return 100;
    const range = max - min;
    return Math.max(0, 100 - Math.abs(value - (min + max) / 2) / range * 100);
  };

  const acidityScore = calc(acidity, 6.0, 6.8);
  const tdsScore = calc(tds, 250, 350);
  const tempScore = calc(temperature, 90, 96);

  const qualityScore = Math.round(
    acidityScore * 0.4 +
    tdsScore * 0.35 +
    tempScore * 0.25
  );

  // INSERT INTO quality_scores
  const { error: insertError } = await supabase
    .from("quality_scores")
    .insert([
      {
        sensor_id: data.id,
        acidity_score: acidityScore,
        tds_score: tdsScore,
        temperature_score: tempScore,
        quality_score: qualityScore,
      },
    ]);

  if (insertError) {
    console.log("Insert error:", insertError);
    return;
  }

  // update UI
  setReadings({
  acidity: data.acidity,
  tds: data.tds,
  temperature: data.temperature,
  quality_score: qualityScore,
  });
};

  return (
    <div style={styles.container}>
      <div style={styles.dropdownWrapper}>
        <Devicedropdown />
      </div>

      <ReadingCard readings={readings} />

      <Readbutton onRead={handleRead} />
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
    marginBottom: "200px",
  },

  dropdownWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: "20px",
    justifyContent: "flex-start",
    marginTop: "20px",
  },
};