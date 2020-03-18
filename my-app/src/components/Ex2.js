//////////// My Example 2
import React from 'react';
class Ex2 extends React.Component {

  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "id": 1,
            "name": "Foo",
            "age": "20"
          },
          {
            "id": 2,
            "name": "Bar",
            "age": "30"
          },
          {
            "id": 3,
            "name": "Baz",
            "age": "40"
          }
        ]
    }
  }
  render() {
    return (
      <div className="main">
        <br />
        <center><h6>Table Demo</h6></center>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i}
              data={person} />)}
          </tbody>
        </table>
        <Content />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    var myStyle = {
      fontSize: 25,
      color: '#FF0000'
    }
    return (
      <div>
        <h1 style={myStyle}>Header Section!!!</h1>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
export default Ex2;