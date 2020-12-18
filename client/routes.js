import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { Messages } from './component'

class Routes extends Component {
  render() {
    return (
        <Route exact path="/" component={Messages} />
    )
  }
}

export default Routes
