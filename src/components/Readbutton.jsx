import React from "react";
import Colors from "./Colors";
import "./Readbutton.css";
import Defaults from "./Defaults";

export default function Readbutton({ onRead }) {
  return (
    <button
      className="readbutton"
      onClick={onRead}
      style={{
        backgroundColor: Colors.white,
        fontFamily: Defaults.fontFamily,
      }}
    >
      Read Data
    </button>
  );
}