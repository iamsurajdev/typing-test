import React from "react";
import styles from "./style.module.css";
import StatisticsItem from "../../util/UI/StatisticsItem";

const Statistics = () => {
  return (
    <div className={styles.main}>
      <StatisticsItem name="Last Score" />
      <StatisticsItem name="WPM" color="#01579B" />
      <StatisticsItem name="CPM" color="#01579B" />
      <StatisticsItem name="Errors" color="#a71627" />
      <StatisticsItem name="Accuracy" color="#12b63f" />
      <StatisticsItem name="Timer" color="#F50057" />
    </div>
  );
};

export default Statistics;
