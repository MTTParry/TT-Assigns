import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// //API, 10 Qs, True/False
// const URL = "https://opentdb.com/api.php?amount=10&type=boolean";

// //API call
// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     //fetch data

//     let data = await response.json();
//     console.log(data);
//     //storing data as a JSON

//     return data.results;
//     //return the data for the function
//   } catch (e) {
//     console.log(e.message); //failed to fetch
//     return "fail";
//     //if the data fails to fetch then the data is the word  "fail"
//   }
// }

// //rendering the data from the API call
// async function renderData(url, container) {
//   let results = await fetchData(url);

//   for (let result of results) {
//     let qb = questionBlock(result);
//     container.appendChild(qb); //renders it
//     console.log(qb);
//   }
// }

// export function questionBlock(result) {
//   const div = document.createElement("div");
//     //create Qs & As
//   let question = result.question;
//   let correct = result.correct_answer;
//   //where to render Qs & As & breaks
//   let liquestion = document.createElement("p");
//   let lianswer = document.createElement("p");
//   let lispace = document.createElement("br");
//   //connect where to render with what to render
//   liquestion.innerHTML = question;
//   lianswer.innerHTML = correct;
//   //appending items to the order list
//   div.appendChild(liquestion);
//   div.appendChild(lianswer);
//   div.appendChild(lispace);
//   //<br/> added for readability
//   return div;
// }


// const container = document.getElementById("root"); //where in html
// container.innerHTML = "";
// renderData(URL, container);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
