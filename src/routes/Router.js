import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import IndexPage from './IndexPage'
import OrderPage from './OrderPage'

function About() {
  return <h2>About</h2>
}

export default function AppRouter({ children }) {
  return (
    <Router>
      {children}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/order" component={OrderPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  )
}
