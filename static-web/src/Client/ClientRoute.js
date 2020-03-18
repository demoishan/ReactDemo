import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from './Components/Home/Main';
import About from "./Components/AboutUs/AboutUS"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import Login from "./Components/Login/Login"
import Page1 from "./Components/Page1/Page1"
import Page2 from "./Components/Page2/Page2"
import Page3 from "./Components/Page3/Page3"
import Logout from "./Components/Logout/Logout"
import { PrivateRoute } from "../PrivateRoute"

class ClientRoute extends React.Component {
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
export default ClientRoute;