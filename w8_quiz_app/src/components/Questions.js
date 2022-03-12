
const Questions = props => {
    //this function fixes the punctuation issues
    function decodeEntity(inputStr) {
        var textarea = document.createElement("textarea");
        textarea.innerHTML = inputStr;
        return textarea.value;
    }
    

    let questions = props.questions;
    let answers = props.correct_answers;

    console.log(questions, "Qs");
    console.log(answers, "As");

    return <>
        {
            //if questions doesn't load
            (!questions) ? 
                (<p>Unable to load Questions</p>) :
            //if questions did load
            questions.map((question,index) =>
                <div key={index} className="card">
                    <p>{decodeEntity(question)}</p>
                    <p>{answers[index]}</p>
                </div>
            )
        }
    </>
};

export default Questions;