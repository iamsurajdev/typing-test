import React from "react";
import TypingSpeedInfoBlock from "../../util/UI/TypingSpeedInfoBlock";
import styles from "./style.module.css";

const TypingSpeedInfo = () => {
  return (
    <div className={styles.main}>
      <TypingSpeedInfoBlock text=" slow < 26 " color="blue" />
      <TypingSpeedInfoBlock text=" 26 - 46 intermediate " color="blue" />
      <TypingSpeedInfoBlock text=" 46 - 65 fast " color="blue" />
      <TypingSpeedInfoBlock text=" 65 + super fast " color="blue" />
    </div>
  );
};

export default TypingSpeedInfo;
