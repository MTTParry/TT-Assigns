const flipButton = document.getElementById("flipper");

flipButton.addEventListener("click", function() {
  //on click, the function should run
  let numberInput = document.getElementById("numberInput").value;
  //get what is in the input field

  let resultsOutput = document.getElementById("resultsOutput");
  //this is where the results should be printed

  if (resultsOutput.hasChildNodes()) {
    resultsOutput.innerText = "";
    //remove old text before showing new text
  }

  if (!numberInput || numberInput.length == 0) { //in case no value is entered
      numberInput = 1;
    }

  
  if (numberInput <= 0) { //in case the number is explicitly zero or a negative
    var nothing = document.createTextNode("There's nothing to flip!");
    resultsOutput.appendChild(nothing);
  }

  //to total up the results
  let headCount = 0;
  let tailCount = 0;


  for ( i = 1 ; i <= numberInput; i++) {
    result = Math.random()

    if (result >= 0.5) {
      headCount++;
      //console.log("Heads!");
    } else {
      tailCount++;
      //console.log("Tails!");
    }
  }

  if (numberInput >= 1) {
    let headsResults = document.createTextNode("You got heads " + headCount + " times. ");
    let tailsResults = document.createTextNode("You got tails " + tailCount + " times. ");
    resultsOutput.appendChild(headsResults);
    resultsOutput.appendChild(tailsResults);
  }
  console.log(resultsOutput);
}
);
