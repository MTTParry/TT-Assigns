import { useState } from 'react';
import Counter from './components/counter.js';


export default function App() {

  return (
    <div className="App">
      <Counter signMinus={"-"} signPlus={"+"} count={"0"} name={"reset"} />
    </div>
  );
}
