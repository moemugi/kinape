import React from "react";
import Colors from "./Colors";
import "./Generatebutton.css";
import Defaults from "./Defaults";

export default function Generatebutton({ onRead }) {
  return (
    <button
      className="generatebutton"
      onClick={onRead}
      style={{
        backgroundColor: Colors.white,
        fontFamily: Defaults.fontFamily,
      }}
    >
      Generate report
    </button>
  );
}