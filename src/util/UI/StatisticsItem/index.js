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
            ? value > 0 && value < 26
              ? "rgb(205,39,188,1)"
              : value >= 26 && value < 46
              ? "rgb(14,136,174,1)"
              : value >= 46 && value < 65
              ? "rgb(181,159,17,1)"
              : value >= 65
              ? "rgb(15,174,35,1)"
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
