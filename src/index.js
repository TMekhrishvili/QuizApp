import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import Questions from './Components/Questions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SettingsProvider } from './ContextAPI/SettingsContext'
const App = () => (

  <SettingsProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questions" component={Questions} />
      </Switch>
    </Router >
  </SettingsProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))