import "./index.css";
import Coinflip from "./coinFlip.js";

export default function App() {
  return (
    <div className="App">
      <h1>Flip-a-Coin</h1>
      <h2>Here's how to play:</h2>
      <ol
        style={{
          textAlign: "left"
        }}
      >
        <li>
          You can enter a number below to decide how many coins to flip, <br />{" "}
          or leave it blank to just flip one coin
        </li>
        <li>Then you hit the "Flip it!" button</li>
      </ol>

      <Coinflip />
    </div>
  );
}

