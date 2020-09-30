import React, {useState, createContext, useEffect} from 'react'

export const QuestionsContext = createContext();

export const QuestionsProvider = props => {
    useEffect(()=>{
        fetchQuestions();
      }, [])
      
    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const category = 18;
        const difficulty = "easy";
        const data = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
        const item = await data.json();
        console.log(item.results)
        setQuestions(item.results)
      }

    return <QuestionsContext.Provider value={[questions, setQuestions]}>{props.children}</QuestionsContext.Provider>;
}
