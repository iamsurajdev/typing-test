import React from "react";
import styles from "./style.module.css";
import StatisticsItem from "../../util/UI/StatisticsItem";

const Statistics = ({
  cpm,
  wpm,
  lastScore,
  duration,
  accuracy,
  errorIndex,
}) => {
  return (
    <div className={styles.main}>
      <StatisticsItem name="Last Score" value={lastScore} />
      <StatisticsItem name="WPM" value={wpm} color="#01579B" />
      <StatisticsItem name="CPM" value={cpm} color="#01579B" />
      <StatisticsItem name="Errors" value={errorIndex} color="#a71627" />
      <StatisticsItem name="Accuracy" value={accuracy} color="#12b63f" />
      <StatisticsItem name="Timer" value={duration} color="#F50057" />
    </div>
  );
};

export default Statistics;
