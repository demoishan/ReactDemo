import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from './Home'
import Error from "./Error"
import Ex0 from "./Ex0"
import P1 from "./P1"
import P1_ClassCounter from "./P1_ClassCounter"
import P1_HookCounter from "./P1_HookCounter"
import P1_HookCounterTwo from "./P1_HookCounterTwo"
import P1_HookCounterThree from "./P1_HookCounterThree"
import P1_HookCounterFour from "./P1_HookCounterFour"
import P1_ClassCounterTwo from "./P1_ClassCounterTwo"
import P1_HookCounterFive from "./P1_HookCounterFive"
import Datafeching from "./Datafeching"
import Datafeching2 from "./Datafeching2"
import Datafeching3 from "./Datafeching3"
import P2_HookReducer from "./P2_HookReducer"
import P2_HookReducerTwo from "./P2_HookReducerTwo"
import DatafechingReducer from "./DatafechingReducer"
import DatafechingReducer2 from "./DatafechingReducer2"
import ParentComponent from "./ParentComponent"


class MyRoute extends React.Component {
    render() {
        return (
            <Switch>

                <Route path="/" component={Ex0} exact />
                <Route path="/home" component={Home} />

                <Route path="/p1" component={P1} />
                <Route path="/p1_1" component={P1_ClassCounter} />
                <Route path="/p1_2" component={P1_HookCounter} />
                <Route path="/p1_3" component={P1_HookCounterTwo} />
                <Route path="/p1_4" component={P1_HookCounterThree} />
                <Route path="/p1_5" component={P1_HookCounterFour} />
                <Route path="/p1_6" component={P1_ClassCounterTwo} />
                <Route path="/p1_7" component={P1_HookCounterFive} />
                <Route path="/p1_8" component={Datafeching} />
                <Route path="/p1_9" component={Datafeching2} />
                <Route path="/p1_10" component={Datafeching3} />

                <Route path="/p2_1" component={P2_HookReducer} />
                <Route path="/p2_2" component={P2_HookReducerTwo} />
                <Route path="/p2_3" component={DatafechingReducer} />
                <Route path="/p2_4" component={DatafechingReducer2} />
                
                
                <Route path="/p3" component={ParentComponent} />


                <Route component={Error} />

            </Switch>
        );

    }
}
export default MyRoute;