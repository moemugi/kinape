import React from "react";
import Colors from "./Colors";
import "./Generatebutton.css";
import Defaults from "./Defaults";

export default function Generatebutton({ onClick }) {
  return (
    <button
      className="generatebutton"
      onClick={onClick}
      style={{
        backgroundColor: Colors.white,
        fontFamily: Defaults.fontFamily,
      }}
    >
      Generate report
    </button>
  );
}