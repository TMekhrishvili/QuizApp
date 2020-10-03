import React, { useState, useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Row } from 'reactstrap'
import Category from '../Category'
import Difficulty from '../Difficulty'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

  return (
    <div className="question-container">
      <Card>
        <CardHeader>
          <h2>George's Quiz</h2>
        </CardHeader>
        <CardBody>
          <Category />
          <br />
          <Difficulty />
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