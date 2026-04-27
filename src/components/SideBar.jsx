import React from "react";
import { Coffee, BarChart2 } from "lucide-react";
import Colors from "./Colors";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: Colors.sidebarColor }}
    >
      {/* Header */}
      <div className="sidebar-header">
      </div>

      {/* Menu */}
      <div className="menu">

        <div className="menu-item">
          <Coffee size={40} color={Colors.white} />
          {/* <span style={{ color: Colors.white }}>Coffee</span> */}
        </div>

        <div className="menu-item">
          <BarChart2 size={40} color={Colors.white} />
          {/* <span style={{ color: Colors.white }}>Statistics</span> */}
        </div>

      </div>
    </div>
  );
}