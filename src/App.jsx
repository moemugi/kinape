import React from "react";
import SideBar from "./components/SideBar";
import Colors from "./components/Colors";
import MonitoringScreen from "./screens/MonitoringScreen";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: `linear-gradient(135deg, ${Colors.gradientBackground[0]}, ${Colors.gradientBackground[1]})`,
      }}
    >
      <SideBar />
      <MonitoringScreen/>

      <div style={{ flex: 1 }} />
    </div>
  );
}