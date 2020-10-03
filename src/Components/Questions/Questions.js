import React, { useState, useContext } from 'react'
import { Card, CardHeader, CardBody, Row, Col, CardFooter } from 'reactstrap'
import './Questions.css'
import { QuestionsContext } from '../../ContextAPI/QuestionsContext'



const Questions = () => {

    const [index, setIndex] = useState(0); 
    const [questions, setQuestions] = useContext(QuestionsContext);    

    return (
        questions.length > 0 && (
            <div className="question-container">
                <Card>
                    <CardHeader dangerouslySetInnerHTML={{ __html: questions[index].question }} />
                    <CardBody>
                        <Row>
                            <Col onClick={setIndex(index + 1)} dangerouslySetInnerHTML={{ __html: questions[index].correct_answer }} />
                            <Col onClick={setIndex(index + 1)} dangerouslySetInnerHTML={{ __html: questions[index].incorrect_answers[2] }} />
                        </Row>
                        <Row>
                            <Col onClick={setIndex(index + 1)} dangerouslySetInnerHTML={{ __html: questions[index].incorrect_answers[1] }} />
                            <Col onClick={setIndex(index + 1)} dangerouslySetInnerHTML={{ __html: questions[index].incorrect_answers[0] }} />
                        </Row>
                    </CardBody>
                    <CardFooter>{index}</CardFooter>
                </Card>
            </div>
        )
    )
}

export default Questions