//////////// My Example 6
import React from 'react';
import ReactDOM from 'react-dom';
class Ex6 extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };
  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
    ReactDOM.findDOMNode(myDiv).style.fontWeight = 'bold';
  }
  render() {
    return (
      <div className="main">
        <br />
        <center><h6>findDOMNode()</h6></center>
        <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
        <div id="myDiv">NODE</div>
      </div>
    );
  }
}
export default Ex6;