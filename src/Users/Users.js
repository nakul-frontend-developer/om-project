import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Helmet} from 'react-helmet';
import User from '../Users/User/User';

const Users = ({ match }) => {
    return (
        <Router>
        <Helmet>
        <title>users</title>
        </Helmet>
            <ul>
                <li><Link to={`${match.url}/1`}>User 1</Link></li>
                <li><Link to={`${match.url}/2`}>User 2</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.url}/:userID`} component={User}/>
                <Route exact path={match.url} render = { () => <h6>Please Select User</h6> }/>
            </Switch>
        </Router>
    )
}

export default Users;

