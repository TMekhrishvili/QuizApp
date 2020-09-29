import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => (
    <div>
      <Link style={{ textDecoration: 'none' }} to="/category">
        <div className="container">
          <div className="start-quiz">
            <h1 className="start-quiz-text">Start Quiz</h1>
          </div>
        </div>
      </Link>
    </div>
  )
export default Home