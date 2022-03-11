import React, { useState, useEffect } from 'react';
import './App.css';
import Questions from './components/Questions';

function App() {
  //set questions into empty array
  const [questions, setQuestions] = useState([]);
  //set answers into empty array
  const [correct_answers, setCorrect_answers] = useState([]);

  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=10&type=boolean')
        .then(response => response.json())
        .then(results => {
          let questions = results.results.map(q => {
            return q.question;
          });
          let answers = results.results.map(a => {
            return a.correct_answer;
          });
          setQuestions(questions);
          console.log(questions, "questions");
          setCorrect_answers(answers);
          console.log(answers);
        });
    }
    catch (e) {
      console.log(e);
    }
  }, []);


  return (
    <div className="App">
        <h1>Week 8: Quiz App</h1>
        <Questions questions={questions} correct_answers={correct_answers}/>
    </div>
  );
}

export default App;