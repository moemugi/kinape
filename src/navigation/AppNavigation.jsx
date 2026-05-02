import React from "react";
import { Routes, Route } from "react-router-dom";
import MonitoringScreen from "../screens/MonitoringScreen";
import StatisticsScreen from "../screens/StatisticsScreen";

export default function AppNavigation() {
  return (
    <Routes>
      <Route path="/" element={<MonitoringScreen />} />
      <Route path="/statistics" element={<StatisticsScreen />} />
    </Routes>
  );
}