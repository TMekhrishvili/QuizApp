import React, { useState, useContext, useEffect } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './Questions.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'
import Answer from './Answer'

const Questions = () => {
    useEffect(() => {
        fetchQuestions();
    }, [])

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);

    const fetchQuestions = async () => {
        const data = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.results);
                console.log(category + " - " + difficulty);
                console.log(data.results)
            })
    }

    const handleClick = () => {
        setIndex(index + 1);
        console.log("ინდექსი");
    }

    const i = <span className="numeration">{index}. </span>
    return (
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
                    <img src="https://i.gifer.com/YCZH.gif" alt="loading" />
                </div>
            )
    )
}

export default Questions