import React from 'react';
import { Route, Switch} from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import Users from '../Users/Users';
import About from '../About/About';
import HomePage from '../HomePage/HomePage';
import Portfolio from '../Portfolio/Portfolio';
import Blogs from '../Blogs/Blogs';


const CommonRoute = (

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/users" component={Users} />
                <Route component={NotFound} />
            </Switch> 

)


export default CommonRoute;
