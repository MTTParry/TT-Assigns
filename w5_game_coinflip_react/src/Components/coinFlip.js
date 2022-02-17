import "../styles.css";
import React, { useState } from "react";

export default function Coinflip() {
  const [numberInput, setNumberInput] = useState(1);

  function onClick(event) {
    if (numberInput <= 0) {
      //in case the number is explicitly zero or a negative
      console.log("There's nothing to flip!");
    }

    //to total up the results
    let headCount = 0;
    let tailCount = 0;

    for (let i = 1; i <= numberInput; i++) {
      let result = Math.random();
      if (result >= 0.5) {
        headCount++;
        console.log("Heads!");
      } else {
        tailCount++;
        console.log("Tails!");
      }
    }

    if (numberInput >= 1) {
      console.log("You got heads " + headCount + " times");
      console.log("You got tails " + tailCount + " times");
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
      <p id="resultsOutput"></p>
    </div>
  );
}
