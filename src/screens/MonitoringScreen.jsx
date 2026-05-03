import React, { useState } from "react";
import ReadingCard from "../components/ReadingCard";
import Readbutton from "../components/Readbutton";
import Devicedropdown from "../components/Devicedropdown";
import mockData from "../data/mock.json";

export default function MonitoringScreen() {
  const [readings, setReadings] = useState({
    acidity: 0,
    tds: 0,
    temperature: 0,
  });

  const handleRead = () => {
    setReadings({
      acidity: mockData.readings.acidity.value,
      tds: mockData.readings.tds.value,
      temperature: mockData.readings.temperature.value,
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