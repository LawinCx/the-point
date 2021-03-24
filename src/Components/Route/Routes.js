import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Login from '../User/Login'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}

export default Routes
