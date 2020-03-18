import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from './Home';
import About from "./AboutUS"
import Contact from "./ContactUS"
import Error from "./Error"
import MyHOC from "./MyHOC"
import Form from "./FormValide"

import Ex0 from "./Ex0"
import Ex1 from "./Ex1"
import Ex2 from "./Ex2"
import Ex3 from "./Ex3"
import Ex4 from "./Ex4"
import Ex5 from "./Ex5"
import Ex6 from "./Ex6"
import Ex7 from "./Ex7"
import Ex8 from "./Ex8"
import Ex9 from "./Ex9"
import Ex10 from "./Ex10"
import Ex11 from "./Ex11"
import Ex12 from "./Ex12"
import Ex13 from "./Ex13"
import Ex14 from "./Ex14"
import Ex15 from "./Ex15"
import Ex16 from "./Ex16"
import Ex17 from "./Ex17"
import Ex18 from "./Ex18"
import Ex19 from "./Ex19"
import Ex20 from "./Ex20"
import Ex21 from "./Ex21"
import Ex22 from "./Ex22"
import Ex23 from "./Ex23"
import Ex24 from "./Ex24"

class MyRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Ex0} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/hoc" component={MyHOC} />
                <Route path="/form" component={Form} />

                <Route path="/ex0" component={Ex0} />
                <Route path="/ex1" component={Ex1} />
                <Route path="/ex2" component={Ex2} />
                <Route path="/ex3" component={Ex3} />
                <Route path="/ex4" component={Ex4} />
                <Route path="/ex5" component={Ex5} />
                <Route path="/ex6" component={Ex6} />
                <Route path="/ex7" component={Ex7} />
                <Route path="/ex8" component={Ex8} />
                <Route path="/ex9" component={Ex9} />
                <Route path="/ex10" component={Ex10} />
                <Route path="/ex11" component={Ex11} />
                <Route path="/ex12" component={Ex12} />
                <Route path="/ex13" component={Ex13} />
                <Route path="/ex14" component={Ex14} />
                <Route path="/ex15" component={Ex15} />
                <Route path="/ex16" component={Ex16} />
                <Route path="/ex17" component={Ex17} />
                <Route path="/ex18" component={Ex18} />
                <Route path="/ex19" component={Ex19} />
                <Route path="/ex20" component={Ex20} />
                <Route path="/ex21" component={Ex21} />
                <Route path="/ex22" component={Ex22} />
                <Route path="/ex23" component={Ex23} />
                <Route path="/ex24" component={Ex24} />
                <Route component={Error} />
            </Switch>
        );

    }
}
export default MyRoute;