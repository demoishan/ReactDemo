import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import DashBoard from './Components/DashBoard/DashBoard';
import Form1 from './Components/Form1/Form1';
import Form2 from './Components/Form2/Form2';
import Form3 from './Components/Form3/Form3';
import Login from './Components/Login/Login';
import { AdminPrivateRoute } from "../Admin/AdminPrivateRoute"


function AdminRoute() {
    return (
        <>
            <AdminPrivateRoute exact path="/Admin/" component={DashBoard} />
            <Route exact path="/Admin/Login" component={Login} />
            <AdminPrivateRoute exact path="/Admin/Form1" component={Form1} />
            <AdminPrivateRoute exact path="/Admin/Form2" component={Form2} />
            <AdminPrivateRoute exact path="/Admin/Form3" component={Form3} />
        </>
    );
  }

export default AdminRoute;