import React from "react";
import styles from "./style.module.css";

const InputArea = ({ value }) => {
  return (
    <div className={styles.inputArea_div}>
      {" "}
      <span ref={value}></span>{" "}
    </div>
  );
};

export default InputArea;
