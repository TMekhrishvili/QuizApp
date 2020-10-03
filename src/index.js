import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Difficulty from './Components/Difficulty'
import Category from './Components/Category'
import Questions from './Components/Questions'
import { QuestionsProvider } from './ContextAPI/QuestionsContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (


  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <QuestionsProvider>
        <Route path="/questions" component={Questions} />
      </QuestionsProvider>
    </Switch>
  </Router >
)

ReactDOM.render(<App />, document.getElementById('root'))