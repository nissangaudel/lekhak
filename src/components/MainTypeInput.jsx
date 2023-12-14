import React, { useState, useEffect, useRef } from "react";

function MainTypeInput({ text, getData }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errorNumber, setErrorNumber] = useState(0);
  const [wpm, setWpm] = useState(0);

  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);

  // Helper function to check if the typed text matches the expected text
  function isMatching(text, inputText) {
    for (let i = 0; i < inputText?.length; i++) {
      if (inputText[i] !== text[i]) {
        return false;
      }
    }
    return true;
  }

  // Calculates words typed per minute
  const calculateWPM = (start, end, text) => {
    let duration = (end - start) / 60000;
    console.log("Total Time", duration);
    let words = text.length / 5;
    return words / duration;
  };

  const start = () => {
    startTimeRef.current = performance.now();
  };

  const end = () => {
    endTimeRef.current = performance.now();
  };

  const handleChange = (event) => {
    if (isMatching(text, event.target.value)) {
      if (event.target.value.length === 1 && event.target.value === text[0]) {
        start();
      }

      if (event.target.value.length === text.length) {
        end();
        const calculatedWpm = Math.round(
          calculateWPM(startTimeRef.current, endTimeRef.current, text)
        );
        setWpm(calculatedWpm);
        getData(errorNumber, calculatedWpm);
        console.log(calculatedWpm);
        setErrorNumber(0);
        setWpm(0);
      }

      setInput(event.target.value);
      setError(false);
    } else {
      setError(true);
      setErrorNumber(errorNumber + 1);
    }
  };

  return (
    <div className="mx-20 px-8">
      <label
        className="absolute line leading-normal text-gray-400 mx-20 px-8 left-0 text-6xl font-semibold"
        htmlFor="textInput"
      >
        {text}
      </label>
      <textarea
        autoFocus
        onChange={handleChange}
        value={input}
        className={`relative bg-transparent leading-normal w-full text-6xl font-semibold outline-none border-none resize-none ${
          error ? "text-red-400" : ""
        } `}
        name="textInput"
        rows="3"
      ></textarea>
    </div>
  );
}

export default MainTypeInput;
