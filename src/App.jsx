import React from "react";
import SideBar from "./components/SideBar";
import Colors from "./components/Colors";
import MonitoringScreen from "./screens/MonitoringScreen";

export default function App() {
  return (
    <div style={{
        display: "flex",
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${Colors.gradientBackground[0]}, ${Colors.gradientBackground[1]})`,
      }}
    >
      <SideBar />
      
      <main style={{ 
        flex: 1, 
        marginLeft: "150px", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}>
        <MonitoringScreen />
      </main>
    </div>
  );
}
