import "../styles.css";
import React, { useState } from "react";

export default function Coinflip() {
  const [numberInput, setNumberInput] = useState(1);
  //to total up the results
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  function onClick(event) {
    setHeadCount(0);
    setTailCount(0);

    for (let i = 1; i <= numberInput; i++) {
      let result = Math.random();
      if (result >= 0.5) {
        setHeadCount(headCount + 1);
        console.log("Heads!");
      } else {
        setTailCount(tailCount + 1);
        console.log("Tails!");
      }
    }
  }

  function onChange(event) {
    //take the value from the input field
    //update numberInput state with that value
    //console.log(event.target.value);
    setNumberInput(event.target.value);
  }

  return (
    <div className="coinFlip">
      <input
        type="number"
        name="numberInput"
        id="numberInput"
        placeholder="Enter a number"
        onChange={onChange}
      />

      <button type="submit" id="flipper" onClick={onClick}>
        Flip it!
      </button>
      <p id="resultsOutput">
        {numberInput <= 0
          ? "Nothing to flip!"
          : "You got heads " +
            headCount +
            " times! You got tails " +
            tailCount +
            " times!"}
      </p>
    </div>
  );
}
