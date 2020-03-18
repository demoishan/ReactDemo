import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './Components/Shared/PrivateRoute.jsx';

import Login from './Components/Login/Login';
import UserList from './Components/UserList/UserList';

function App() {

  return (
    <Router>
      <PrivateRoute exact path="/" component={UserList} />
      <Route path="/login" component={Login} />
    </Router >
  );
}

export default App;
