import React from "react";
import { Coffee, BarChart2 } from "lucide-react";
import Colors from "./Colors";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";



export default function SideBar() {
  const navigate = useNavigate(); 

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: Colors.sidebarColor }}
    >
      <div className="sidebar-header"></div>

      <div className="menu">
        <div
          className="menu-item"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <Coffee size={40} color={Colors.white} />
           {/* <span style={{ color: Colors.white }}>Coffee</span> */}
        </div>

        <div
          className="menu-item"
          onClick={() => navigate("/statistics")}
          style={{ cursor: "pointer" }}
        >
          <BarChart2 size={40} color={Colors.white} />
           {/* <span style={{ color: Colors.white }}>Coffee</span> */}
        </div>
      </div>
    </div>
  );
}