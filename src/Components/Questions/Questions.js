import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'
import { QuestionsContext } from '../../ContextAPI/QuestionsContext'

const Questions = () => {
  const [questions, setQuestions] = useContext(QuestionsContext);
  return (
    <div>
      {questions.map((item) => (
        /*<Link to={`/questions/${1}`}><p>{item.question}</p></Link>*/
        <Question question={item.question} />
      ))}
    </div>
  )
}
export default Questions