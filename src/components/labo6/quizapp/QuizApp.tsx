import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";
import { useState } from "react";
import { Question } from "./Labo6Quiz"
import { decode } from "html-entities"

interface IMultipleChoiceQuestion {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: {0: string, 1: string, 2: string}
}

interface ITrueFalseQuestion {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: {0: string}
}

interface QuizAppProps {
    questions: Question[],
    LoadMore: () => void
}

export const QuizApp = ({questions,LoadMore}:QuizAppProps) => {
    const [answers, setAnswers] = useState<string[]>(["","","","","","","","","",""])
    const [answered, setAnswered] = useState<boolean[]>([false,false,false,false,false,false,false,false,false,false])

    const checkAnswer = (givenAnswer:string, id:number) => {
        let newAnswers = [...answers]
        newAnswers[id] = givenAnswer
        setAnswers(newAnswers)
        let newAnswered = [...answered]
        newAnswered[id] = true
        setAnswered(newAnswered)
    }

    return(
        <div>
            {questions.map((question:Question, index) => (
                <div style={answered[index] ? (answers[index]===question.correct_answer ? {backgroundColor:"lightgreen"} : {backgroundColor:"red"}) : {backgroundColor:"white"}}>
                    <div>{decode(question.question)}</div>
                    {answered[index] ? 
                        <div className="answer">
                            You answered {decode(answers[index])} 
                            {answers[index] === question.correct_answer ? 
                                " which is the correct answer"
                                :
                                ` and the correct answer is ${decode(question.correct_answer)}`
                            }
                        </div>
                        : 
                        <div>{question.incorrect_answers.length > 1 ? <MultipleChoiceQuestion question={question} onAnswer={checkAnswer} id={index}></MultipleChoiceQuestion> : <TrueFalseQuestion question={question} onAnswer={checkAnswer} id={index}></TrueFalseQuestion>}</div>
                    }
                </div>
            ))}
            <button onClick={LoadMore}>Load More</button>
        </div>
    );
}