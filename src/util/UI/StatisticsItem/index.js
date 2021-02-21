import React from "react";
import styles from "./style.module.css";

const StatisticsItem = ({ name, value, color = "#512DA8" }) => {
  return (
    <div className={styles.main} style={{ border: `5px solid ${color}` }}>
      <span className={styles.value}>value</span>
      <span className={styles.name}>name</span>
    </div>
  );
};

export default StatisticsItem;
