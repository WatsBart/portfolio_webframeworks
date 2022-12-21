import React from "react";
import { Question } from "./Labo6Quiz";

interface TrueFalseQuestionProps {
    question: Question,
    onAnswer: (answer:string,id:number) => void,
    id:number
}


const TrueFalseQuestion = ({question,onAnswer,id}:TrueFalseQuestionProps) => {
    let answers = [...question.incorrect_answers];
    let index = Math.floor(Math.random()*3);
    answers.splice(index,0,question.correct_answer);

    return(
        <React.Fragment>            
            {answers.map((answer) => (
                <label>
                    <input type="radio" value={answer} onChange={(event)=>onAnswer(event.target.value,id)} />
                    {answer}
                </label>
            ))}
        </React.Fragment>
    );
}

export default TrueFalseQuestion;