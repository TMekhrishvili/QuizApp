import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Difficulty from './Components/Difficulty'
import Category from './Components/Category'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/difficulty" component={Difficulty} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))