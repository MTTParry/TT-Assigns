import "../styles.css";
import React, { useEffect, useState } from "react";

export default function Coinflip() {
  //To set the initial numberInput value at 1 (1 coin)
  const [numberInput, setNumberInput] = useState(1);

  //to total up the results
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  //So it starts without flipping
  const [gameStart, setGameStart] = useState(false);

  //what happens when you click the submit buttom
  function onClick(event) {
    //this sets it to true, so it will display results
    if (gameStart === false) {
      setGameStart(true);
    }

    //when you click submit, you reset the counts
    setHeadCount(0);
    setTailCount(0);
  }

  //when you change the input in the input field
  function onChange(event) {
    //take the value from the input field
    //update numberInput state with that value
    //console.log(event.target.value);
    setNumberInput(event.target.value);
  }

  //useEffect!!!
  useEffect(() => {
    if (tailCount === 0 && headCount === 0 && gameStart === true) {
      //these have to have temporary values here
      let tempHeadCount = 0;
      let tempTailCount = 0;

      //this is the actual coinflip function
      for (let i = 1; i <= numberInput; i++) {
        let result = Math.random();
        if (result >= 0.5) {
          tempHeadCount++;
          //console.log("Heads!");
        } else {
          tempTailCount++;
          //console.log("Tails!");
        }
      }
      //gives total temp values to the outside counts
      //otherwise it doesn't reset properly
      setHeadCount(tempHeadCount);
      setTailCount(tempTailCount);
    }
  }, [headCount, tailCount, numberInput, gameStart]); //the useStates the useEffect keeps track of

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
