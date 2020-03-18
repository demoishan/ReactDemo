//////////// My Example 3
import React from 'react';
class Ex3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header from props...",
      content: "Content from props..."
    }
  }
  render() {
    return (
      <div className="main">
        <br />
        <center><h6>React State and Props, Passing props to child Component</h6></center>	
        <Header headerProp={this.state.header} />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> this.props.headerProp </h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2> this.props.contentProp </h2>
      </div>
    );
  }
}
export default Ex3;