import React from "react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import Colors from "./components/Colors";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${Colors.gradientBackground[0]}, ${Colors.gradientBackground[1]})`,
        }}
      >
        <SideBar />

        <main
          style={{
            flex: 1,
            marginLeft: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <AppNavigation />
        </main>
      </div>
    </BrowserRouter>
  );
}