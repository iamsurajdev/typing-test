import React from "react";
import TypingSpeedInfoBlock from "../../util/UI/TypingSpeedInfoBlock";
import styles from "./style.module.css";

const TypingSpeedInfo = () => {
  return (
    <div className={styles.main}>
      <TypingSpeedInfoBlock text=" slow < 26 " color="rgb(205,39,188,1)" />
      <TypingSpeedInfoBlock
        text=" 26 - 46 intermediate "
        color="rgb(14,136,174,1)"
      />
      <TypingSpeedInfoBlock text=" 46 - 65 fast " color="rgb(181,159,17,1)" />
      <TypingSpeedInfoBlock text=" 65 + super fast " color="rgb(15,174,35,1)" />
    </div>
  );
};

export default TypingSpeedInfo;
