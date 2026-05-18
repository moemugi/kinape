import React from "react";
import Colors from "./Colors";
import "./ReadingCard.css";
import Defaults from "./Defaults";


export default function ReadingCard({ readings }) {

    if (!readings) return null;

    const safeReadings = {
      acidity: readings?.acidity ?? 0,
      tds: readings?.tds ?? 0,
      temperature: readings?.temperature ?? 0,
      quality_score: readings?.quality_score ?? 0,
    };

    const cards = [
    {
      title: "Acidity",
      desc: "pH Level",
      data: safeReadings.acidity,
    },
    {
      title: "Total Dissolved Solids",
      desc: "ppm",
      data: safeReadings.tds,
    },
    {
      title: "Temperature",
      desc: "°C",
      data: safeReadings.temperature,
    },
  ];

  return (
    <div className="reading-wrapper">
      
      <h2
        className="titlereadings"
        style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}
      >
        Quality Score: {safeReadings.quality_score}
      </h2>

      <div className="card-container">
        {cards.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundColor: Colors.cardColor }}
          >
            <h3 style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}>
              {item.title}
            </h3>
            <p style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}>
              {item.desc}
            </p>
            <p style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}>
              {item.data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}