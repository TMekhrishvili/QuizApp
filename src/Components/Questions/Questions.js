import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'
import { QuestionsContext } from '../../ContextAPI/QuestionsContext'

const Questions = () => {
  const [questions, setQuestions] = useContext(QuestionsContext);
  return (
    <div>
      {questions.map((value) => (
        <Link to={`/questions/${1}`}><p>{value.question}</p></Link>
      ))}
    </div>
  )
}
export default Questions