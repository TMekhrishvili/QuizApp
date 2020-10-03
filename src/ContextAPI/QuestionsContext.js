import React, {useState, createContext, useEffect, useContext} from 'react'
import { CategoryContext } from './CategoryContext'
import { DifficultyContext } from './DifficultyContext'

export const QuestionsContext = createContext();

export const QuestionsProvider = props => {
    useEffect(()=>{
        fetchQuestions();
      }, [])
      
    const [questions, setQuestions] = useState([]);
    const [category, setCategory] = useContext(CategoryContext);
    const [difficulty, setDifficulty] = useContext(DifficultyContext);

    const fetchQuestions = async () => {
        const data = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then((res) => res.json())
        .then((data) =>{
          setQuestions(data.results)
          console.log(data.results)
        })
        
        
      }

    return <QuestionsContext.Provider value={[questions, setQuestions]}>{props.children}</QuestionsContext.Provider>;
}
