import React from 'react';

import { Media } from 'react-bootstrap';

import './Sidebar.css';

import logo from '../../../logo.jpg';

function Sidebar(props) {
  return (
    <div className="custom-sidebar flex-column hidden-xs">
        <Media>
          <img src={logo} width={200} height={55} alt="logo"/>
        </Media>
    </div>
  );
}

export default Sidebar;