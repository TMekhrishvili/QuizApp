import React, { useState, useContext, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import './Questions.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'
import Answer from './Answer'
import { Row, Col } from 'reactstrap'

const Questions = () => {

    useEffect(() => {
        fetchQuestions();
        //.then(shuffle());
    }, [])

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [score, setScore, category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);

    const fetchQuestions = async () => {
        const data = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.results);
            })
    }
    const shuffle = array => {
        const answers = array.incorrect_answers;
        answers.push(array.correct_answer)
        answers.sort(() => Math.random() - 0.5);
        return answers;
    }
    return (
        questions.length > 0 ? (
            <div className="question-container">
                <Card>
                    <CardHeader dangerouslySetInnerHTML={{ __html: questions[index].question }} />
                    <CardBody>
                        {shuffle(questions[index]).map((ans) => (
                            <Answer index={index} ans={ans} correct={questions[index].correct_answer} />
                        ))}
                    </CardBody>
                    <CardFooter>
                        <Row>
                            <Col><h3 align="center">Score: {score}</h3></Col>
                        </Row>
                    </CardFooter>
                </Card>
            </div>
        ) : (
                <div className="align-items-center d-flex justify-content-center">
                    <img src="https://i.gifer.com/YCZH.gif" alt="loading" />
                </div>
            )
    )
}

export default Questions