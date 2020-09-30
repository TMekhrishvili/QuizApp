import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Difficulty from './Components/Difficulty'
import Category from './Components/Category'
import Questions from './Components/Questions'
import {QuestionsProvider} from './ContextAPI/QuestionsContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => (
  <QuestionsProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/difficulty" component={Difficulty} />
        <Route path="/questions/:id" component={Questions} />
      </Switch>
    </Router>
  </QuestionsProvider>
  )
  
  ReactDOM.render(<App />, document.getElementById('root'))