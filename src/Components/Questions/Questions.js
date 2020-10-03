import React, { useState, useContext, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import './Questions.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'
import Answer from './Answer'
import { Row, Col } from 'reactstrap';
import Message from './Message';
import { Link } from 'react-router-dom';

const Questions = () => {

    useEffect(() => {
        fetchQuestions();
    }, [])
    const [modal, setModal] = useState(false);
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

    const handleClick = () => {
        if (index === 9) {
            setModal(true);
        } else {
            setIndex(index + 1);
        }
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
                <Message sc={score} tog={modal} />
                <Card>
                    <CardHeader dangerouslySetInnerHTML={{ __html: questions[index].question }} />
                    <CardBody>
                        {shuffle(questions[index]).map((ans) => (
                            <div onClick={handleClick}>
                                <Answer index={index} ans={ans} correct={questions[index].correct_answer} />
                            </div>
                        ))}
                    </CardBody>
                    <CardFooter>
                        <Row sp="2">
                            <Col><h3 align="left" >Score: {score}</h3></Col>
                            <Col><Link style={{ textDecoration: 'none', color: 'red' }} to="/"><h3 align="right">Reset Quiz!</h3></Link></Col>
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