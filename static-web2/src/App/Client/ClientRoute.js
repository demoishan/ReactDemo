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
import { ClientPrivateRoute } from "../Client/ClientPrivateRoute"

class ClientRoute extends React.Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Home} exact />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <ClientPrivateRoute exact path="/page1" component={Page1} />
                <ClientPrivateRoute exact path="/page2" component={Page2} />
                <ClientPrivateRoute exact path="/page3" component={Page3} />
                {/* <Route path='*' exact={true} component={PageNotFound} /> */}
            </>
        );

    }
}
export default ClientRoute;