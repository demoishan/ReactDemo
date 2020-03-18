//////////// My Example 9
import React from 'react';
import ReactDOM from 'react-dom';
class Ex9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  };
  updateState(e) {
    this.setState({ data: e.target.value });
  }
  clearInput() {
    this.setState({ data: '' });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  render() {
    return (
      <div className="main">
        <br />
        <center><h6>clearInput</h6></center>	
        <input value={this.state.data} onChange={this.updateState} ref="myInput" />
        <button onClick={this.clearInput}>Reset</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}
export default Ex9;