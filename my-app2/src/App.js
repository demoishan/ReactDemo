import Header from './components/shared/Header/Header.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import Profile from './components/Profile/Profile.jsx'
import Nav from './components/shared/Nav/Nav.jsx'
import './App.css';
import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Nav ></Nav>
      <div className="container">

        <div className="row">
          <div className="col" >
            <Header></Header>
          </div>
        </div>

        <div className="row">
          <div className="col" >
            <Profile></Profile>
          </div>
        </div>


        <div className="row">
          <div className="col" >
            <Footer></Footer>
          </div>
        </div>

      </div>
    </Fragment>

  );
}

export default App;
