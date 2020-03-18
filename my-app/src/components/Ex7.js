//////////// My Example 7
import React from 'react';
class Ex7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  };
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div className="main">
        <br />
        <center><h6>Component Life Cycle (look into console.log)</h6></center>	        
        <button onClick={this.setNewNumber}> Incement </button>
        <Conetent myNumber={this.state.data} ></Conetent>
      </div>
    );
  }
}
class Conetent extends React.Component {
  componentWillMount() {
    console.log('Component componentWillMount!')
  }
  componentDidMount() {
    console.log('Component componentDidMount!')
  }
  componentWillReceiveProps() {
    console.log('Component componentWillReceiveProps!')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('ComponentshouldComponentUpdate!')
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component componentWillUpdate!')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component componentDidUpdate!')
  }
  componentWillUnmount() {
    console.log('Component componentWillUnmount!')
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default Ex7;