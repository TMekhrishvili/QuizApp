import React, { useEffect, useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Row } from 'reactstrap'
import Category from '../Category'
import Difficulty from '../Difficulty'
import { Link } from 'react-router-dom'
import './Home.css'
import { SettingsContext } from '../../ContextAPI/SettingsContext'

const Home = () => {
  useEffect(() => {
    setScore(0);
    setCategory(9);
    setDifficulty("easy");
  }, [])
  const [score, setScore, category, setCategory, difficulty, setDifficulty] = useContext(SettingsContext);

  return (
    <div className="question-container">
      <Card>
        <CardHeader>
          <h2>Quiz App</h2>
        </CardHeader>
        <CardBody>
          <br />
          <Category />
          <br />
          <Difficulty />
          <br />
        </CardBody>
        <CardFooter>
          <Row>
            <Button block color="success" size="lg" style={{ margin: '5px 10px', padding: '10px' }}>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/questions">Start Quiz</Link>
            </Button>
          </Row>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home