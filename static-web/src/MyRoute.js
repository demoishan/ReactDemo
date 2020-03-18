import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"

import Home from './Client/Components/Home/Main';
import About from "./Client/Components/AboutUs/AboutUS"
import Contact from "./Client/Components/Contact/Contact"
import Services from "./Client/Components/Services/Services"
import PageNotFound from "./Client/Components/PageNotFound/PageNotFound"
import Login from "./Client/Components/Login/Login"
import Page1 from "./Client/Components/Page1/Page1"
import Page2 from "./Client/Components/Page2/Page2"
import Page3 from "./Client/Components/Page3/Page3"
import Logout from "./Client/Components/Logout/Logout"
import { PrivateRoute } from "./PrivateRoute"

class MyRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <PrivateRoute exact path="/page1" component={Page1} />
                <PrivateRoute exact path="/page2" component={Page2} />
                <PrivateRoute exact path="/page3" component={Page3} />
                <Route component={PageNotFound} />
            </Switch>
        );

    }
}
export default MyRoute;