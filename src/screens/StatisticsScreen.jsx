import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Colors from "../components/Colors";
import React from "react";
import Generatebutton from "../components/Generatebutton";
import Defaults from "../components/Defaults";
import Devicedropdown from "../components/Devicedropdown";
import Chart from "../components/chart";
import { supabase } from "../components/supabase";
import { jsPDF } from "jspdf";

export default function StatisticScreen() {

  const generatePDF = () => {
    const doc = new jsPDF();
    console.log("test");

    doc.text("sample", 10, 10); 
    doc.save("report.pdf"); 
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Statistics</h2>

      {/* Dropdown */}
      <div style={styles.dropdownWrapper}>
        <Devicedropdown />
      </div>

      {/* Chart */}
      <Chart/>

      {/* Button */}
      <div style={styles.buttonWrapper}>
        <Generatebutton onClick={generatePDF}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
    marginBottom: "500px",
    marginTop: "-80px",
    gap: "20px",

  },

  title: {
    color: Colors.white,
    fontFamily: Defaults.fontFamily,
  },

  dropdownWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "10px",
  },
};