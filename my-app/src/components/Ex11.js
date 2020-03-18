
//////////// My Example 12
import React from 'react';
class Ex11 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  };
  setStateHandler() {
    var item = "setState..."
    var myarry = this.state.data.slice();
    myarry.push(item);
    this.setState({ data: myarry });
  };
  render() {
    return (
        <div className="main">
        <br />
        <center><h6>setStateHandler</h6></center>
        <button onClick={this.setStateHandler}>Set State</button>
        <h4>Current State: {this.state.data}</h4>
      </div>
    );
  }
}

export default Ex11;
