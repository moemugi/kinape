import React from "react";
import Colors from "./Colors";
import "./Readbutton.css";
import Defaults from "./Defaults";

export default function Readbutton() {
    
  return (
            <button className="readbutton" 
                style={{ backgroundColor: Colors.white, fontFamily: Defaults.fontFamily }}> 
                Read Data
            </button>
             
          );

}