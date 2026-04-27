import React from "react";
import Colors from "./Colors";
import "./ReadingCard.css";

export default function ReadingCard() {
  const cards = [
    {
      title: "Acidity",
      desc: "wip",
    },
    {
      title: "Total Dissolved Solids",
      desc: "wip",
    },
    {
      title: "Temperature",
      desc: "wip",
    },
  ];

  return (
    <div className="card-container">
      {cards.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: Colors.cardColor }}
        >
          <h3 style={{ color: Colors.white }}>{item.title}</h3>
          <p style={{ color: Colors.white }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}