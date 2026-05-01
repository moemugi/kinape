import React from "react";
import Colors from "./Colors";
import "./ReadingCard.css";
import Defaults from "./Defaults";

export default function ReadingCard() {
  const cards = [
    {
      title: "Acidity",
      desc: "wip",
      data: "--"
    },
    {
      title: "Total Dissolved Solids",
      desc: "wip",
      data: "--"
    },
    {
      title: "Temperature",
      desc: "wip",
      data: "--"
    },
  ];

  return (
            <div className="reading-wrapper">
              <h2
                className="titlereadings"
                style={{ color: Colors.white, fontFamily: Defaults.fontFamily }}
              >
                Readings
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