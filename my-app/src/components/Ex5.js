//////////// My Example 5
import React from 'react';
class Ex5 extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };
  forceUpdateHandler() {
    this.forceUpdate();
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
        <center><h6>forceUpdate</h6></center>	
        <button onClick={this.forceUpdate}>Set forceUpdate</button>
        <h4>Random number: {Math.random()}</h4>
      </div>
    );
  }
}
export default Ex5;