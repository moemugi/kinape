import React from "react";
import Colors from "./Colors";
import "./Devicedropdown.css";
import Defaults from "./Defaults";

export default function Devicedropdown() {
  return (
    <div className="dropdown-container">
      <label  style={{ color: Colors.white, fontFamily: Defaults.fontFamily }} className="dropdown-label">
        Select Device:
      </label>

      <select className="device-select" style={{ color: Colors.labelButton, fontFamily: Defaults.fontFamily }} >
        <option value="device1">Device 01</option>
        <option value="device2">Device 02</option>
        <option value="device3">Device 03</option>
      </select>
    </div>
  );
}
