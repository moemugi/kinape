import React from "react";
import ReadingCard from "../components/ReadingCard";
import Readbutton from "../components/Readbutton";

export default function MonitoringScreen() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      gap: "30px", 
      width: "100%",
      maxWidth: "800px", 
      marginBottom: "200px",
    }}>
      <ReadingCard />
      <Readbutton />
    </div>
  );
}

