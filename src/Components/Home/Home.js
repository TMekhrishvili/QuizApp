import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Row } from 'reactstrap'
import Category from '../Category'
import Difficulty from '../Difficulty'
import { Link } from 'react-router-dom'
import { CategoryProvider } from '../../ContextAPI/CategoryContext'
import { DifficultyProvider } from '../../ContextAPI/DifficultyContext'
import './Home.css'

const Home = () => {

  return (
    <div className="question-container">
      <Card>
        <CardHeader>
          <h2>George's Quiz</h2>
        </CardHeader>
        <CardBody>
          <CategoryProvider>
            <DifficultyProvider>
              <Category />
              <br />
              <Difficulty />
            </DifficultyProvider>
          </CategoryProvider>
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