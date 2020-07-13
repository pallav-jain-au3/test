import React, { Component } from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './container/Home';
import Shipment from './container/Shipment';
export default class App extends Component {
  render() {
    return (
      <Router>
      <Route exact path = '/' component = {Home} />
      <Route  exact path = '/shipment/:id' component = {Shipment}/>
      </Router>
    )
  }
}
