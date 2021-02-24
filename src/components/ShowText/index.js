import React from "react";
import styles from "./style.module.css";

const ShowText = ({
  quote,
  started,
  ended,
  isError,
  inputRef,
  input,
  handleKeyDown,
}) => {
  return (
    <div className={styles.main}>
      {ended ? (
        <div className={styles.ended_div}>
          <span>"{quote.quote}"</span>
          <br />
          <span className={styles.ended_div_author_span}>- {quote.author}</span>
        </div>
      ) : started ? (
        <div
          className={styles.started_div}
          style={
            !isError
              ? started
                ? {
                    boxShadow: "0 0 3px 0.15rem rgb(23, 168, 27)",
                    outline: "0",
                  }
                : {}
              : isError
              ? { boxShadow: "0 0 3px 0.15rem rgb(190, 25, 25)", outline: "0" }
              : {}
          }
          tabIndex="0"
          onKeyDown={handleKeyDown}
          ref={inputRef}
        >
          {input}
        </div>
      ) : (
        <div className={styles.last_section_div} tabIndex="-1" ref={inputRef}>
          {input}
        </div>
      )}
    </div>
  );
};

export default ShowText;
