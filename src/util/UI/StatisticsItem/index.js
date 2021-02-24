import React from "react";
import styles from "./style.module.css";

const StatisticsItem = ({ name = "N/A", value = "N/A", color = "#512DA8" }) => {
  return (
    <div
      className={styles.main}
      style={{
        border: `5px solid ${color}`,
        backgroundColor:
          name === "WPM"
            ? value > 0 && value < 20
              ? "#eb4841"
              : value >= 20 && value < 40
              ? "#f48847"
              : value >= 40 && value < 60
              ? "#ffc84a"
              : value >= 60 && value < 80
              ? "#a6c34c"
              : value >= 80
              ? "#4ec04e"
              : ""
            : {},
      }}
    >
      <span className={styles.value}>{value}</span>
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default StatisticsItem;
