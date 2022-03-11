
const Questions = props => {
    let questions = props.questions;
    let answers = props.correct_answers;

    // console.log(questions, "Qs");
    // console.log(answers, "As");



    return <>
        {
            //if questions doesn't load
            (!questions) ? 
                (<p>Unable to load Questions</p>) :
            //if questions did load
            questions.map((question,index) =>
                <div key={index} className="card">
                    <p>{question}</p>
                    <p>{answers[index]}</p>
                </div>
            )
        }
    </>
};

export default Questions;