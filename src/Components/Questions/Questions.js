import React, { useState, useContext } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './Questions.css'
import { QuestionsContext, QuestionsProvider } from '../../ContextAPI/QuestionsContext'
import Answer from './Answer'

const Questions = () => {

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useContext(QuestionsContext);
    const i = <span className="numeration">{index}. </span>

    const handleClick = () => {
        console.log("ინდექსი")
    }

    return (
        <QuestionsProvider>{
            questions.length > 0 ? (

                <div className="question-container">
                    <Card>
                        <CardHeader dangerouslySetInnerHTML={{ __html: (i, questions[index].question) }} />
                        <CardBody>
                            <Answer index={index} data={questions[index]} onClick={handleClick} />
                            <Answer index={index} data={questions[index]} onClick={handleClick} />
                            <Answer index={index} data={questions[index]} onClick={handleClick} />
                            <Answer index={index} data={questions[index]} onClick={handleClick} />
                        </CardBody>
                    </Card>
                </div>
            ) : (
                    <div class="align-items-center d-flex justify-content-center">
                        <img src="https://i.gifer.com/YCZH.gif" />
                    </div>
                )}
        </QuestionsProvider>)
}

export default Questions