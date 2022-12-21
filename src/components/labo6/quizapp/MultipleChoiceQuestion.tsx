import React from "react";
import { Question } from "./Labo6Quiz";
import { decode } from "html-entities"

interface MultipleChoiceQuestionProps {
    question: Question,
    onAnswer: (answer:string,id:number) => void,
    id:number
}

const MultipleChoiceQuestion = ({question,onAnswer,id}:MultipleChoiceQuestionProps) => {
    let answers = [...question.incorrect_answers];
    let index = Math.floor(Math.random()*3);
    answers.splice(index,0,question.correct_answer);

    return(
        <React.Fragment>
            <select onChange={(event)=>onAnswer(event.target.value,id)}>
                <option value={"Select an answer"}>Select an answer</option>
                {answers.map((answer) => <option value={answer}>{decode(answer)}</option>)}
            </select>
        </React.Fragment>
    );
}

export default MultipleChoiceQuestion;