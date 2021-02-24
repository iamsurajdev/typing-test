import React, { useState, useRef, useEffect } from "react";
import styles from "./app.module.css";
import { quotesArray, random, allowedKeys } from "./util/helperFunctions";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowText from "./components/ShowText";
import Statistics from "./components/Statistics";
import Tips from "./components/Tips";
import TypingSpeedInfo from "./components/TypingSpeedInfo";

const App = () => {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const [duration, setDuration] = useState(60);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [errorIndex, setErrorIndex] = useState(0);
  const [quote, setQuote] = useState({});
  const [input, setInput] = useState("");
  const [cpm, setCpm] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isError, setIsError] = useState(false);
  const [lastScore, setLastScore] = useState("0");

  const handleStart = () => {
    //
  };

  return (
    <div>
      <Header />
      <Statistics
        cpm={cpm}
        wpm={wpm}
        lastScore={lastScore}
        duration={duration}
        accuracy={accuracy}
        errorIndex={errorIndex}
      />

      {/* Start Button */}
      {ended || started ? (
        <div
          onClick={() => window.location.reload()}
          className={styles.startButton}
        >
          {" "}
          <span> Reload</span>{" "}
        </div>
      ) : (
        <div onClick={handleStart} className={styles.startButton}>
          {" "}
          <span> Start </span>{" "}
        </div>
      )}
      {/* Start Button end */}

      <div className={styles.container}>
        <div className={styles.leftSideInContainer}>
          {" "}
          <Tips />{" "}
        </div>
        <div className={styles.rightSideInContainer}>
          <ShowText />
          <InputArea state={input} setState={setInput} />
          <TypingSpeedInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
