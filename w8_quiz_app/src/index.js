import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//API, 10 Qs, True/False
const URL = "https://opentdb.com/api.php?amount=10&type=boolean";

//API call
async function fetchData() {
  try {
    const response = await fetch(URL);
    //fetch data

    let data = await response.json();
    console.log(data);
    //storing data as a JSON

    return data.results;
    //return the data for the function
  } catch (e) {
    console.log(e.message); //failed to fetch
    return "fail";
    //if the data fails to fetch then the data is the word  "fail"
  }
}

async function renderData() {
  let results = await fetchData();

  const container = document.getElementById("root");
  const ul =document.createElement("ul");
  ul.style.padding = "0";

  for (let object in results) {
    let question = results[object].question;
    let correct = results[object].correct_answer;
    let liquestion = document.createElement("li");
    let lianswer = document.createElement("li");
    liquestion.innerHTML = question;
    lianswer.innerHTML = correct;
    lianswer.style.listStyle = "none";
    ul.appendChild(liquestion);
    ul.appendChild(lianswer);
  }
  container.appendChild(ul);
}

renderData();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
