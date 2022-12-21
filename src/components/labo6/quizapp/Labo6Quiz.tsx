import { useEffect, useState } from 'react';
import { LoadingIndicator } from '../../labo5/pokemon/LoadingIndicator';
import { QuizApp } from './QuizApp';
import "../styles/Styles.css"

interface data {
  response_code: number,
  results: Question[]
}

export interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

const Labo6Quiz = () => {
  const [questions,setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false)
  
    const LoadMore = async() => {
      setLoading(true)
      let result = await fetch("https://opentdb.com/api.php?amount=10");
      let json : data = await result.json();
      setQuestions([...questions,...json.results])
      setLoading(false)
    }

    useEffect(() => {
        const fetchFunction = async() => {
          setLoading(true)
          let result = await fetch("https://opentdb.com/api.php?amount=10");
          let json : data = await result.json();
          setQuestions(json.results);
          setLoading(false)
        }
        fetchFunction();
    },[]);

  return (
    <div>
      <QuizApp questions={questions} LoadMore={LoadMore}/>
      {loading ? <LoadingIndicator /> : <div />}
    </div>
    
  );
}

export default Labo6Quiz;
