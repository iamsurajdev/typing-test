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
      <StatisticsItem name="WPM" value={wpm} />
      <StatisticsItem name="CPM" value={cpm} />
      <StatisticsItem name="Errors" value={errorIndex} />
      <StatisticsItem name="Accuracy" value={accuracy} />
      <StatisticsItem name="Timer" value={duration} />
    </div>
  );
};

export default Statistics;
