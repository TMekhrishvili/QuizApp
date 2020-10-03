import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Difficulty from './Components/Difficulty'
import Category from './Components/Category'
import Questions from './Components/Questions'
import { CategoryProvider } from './ContextAPI/CategoryContext'
import { DifficultyProvider } from './ContextAPI/DifficultyContext'
import { QuestionsProvider } from './ContextAPI/QuestionsContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (


  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <CategoryProvider>
        <DifficultyProvider>
          <QuestionsProvider>
            <Route path="/questions" component={Questions} />
          </QuestionsProvider>
        </DifficultyProvider>
      </CategoryProvider>
    </Switch>
  </Router >
)

ReactDOM.render(<App />, document.getElementById('root'))