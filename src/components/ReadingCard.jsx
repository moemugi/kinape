import React from "react";
import Colors from "./Colors";
import "./ReadingCard.css";
import Defaults from "./Defaults";
import data from "../data/mock.json";

export default function ReadingCard({ readings }) {

  const { factors } = data;

  const calculateScore = (value, min, max) => {
    if (value >= min && value <= max) return 100;

    const range = max - min;

    if (value < min) {
      return Math.max(0, 100 - ((min - value) / range) * 100);
    } else {
      return Math.max(0, 100 - ((value - max) / range) * 100);
    }
  };

  
  const acidityScore = calculateScore(
    readings.acidity,
    factors.idealRanges.acidity.min,
    factors.idealRanges.acidity.max
  );

  const tdsScore = calculateScore(
    readings.tds,
    factors.idealRanges.tds.min,
    factors.idealRanges.tds.max
  );

  const tempScore = calculateScore(
    readings.temperature,
    factors.idealRanges.temperature.min,
    factors.idealRanges.temperature.max
  );

  // weighted total score
  const qualityScore = Math.round(
    acidityScore * factors.acidityWeight +
    tdsScore * factors.tdsWeight +
    tempScore * factors.temperatureWeight
  );

  const cards = [
    {
      title: "Acidity",
      desc: "pH Level",
      data: readings.acidity || 0,
    },
    {
      title: "Total Dissolved Solids",
      desc: "ppm",
      data: readings.tds || 0,
    },
    {
      title: "Temperature",
      desc: "°C",
      data: readings.temperature || 0,
    },
  ];

  return (
    <div className="reading-wrapper">
      
      <h2
        className="titlereadings"
        style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}
      >
        Quality Score: {qualityScore}
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