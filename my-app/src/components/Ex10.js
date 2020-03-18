//////////// My Example 10
import React from 'react';
class Ex10 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{ component: 'First...', id: 1 }, { component: 'Second...', id: 2 }, { component: 'Third...', id: 3 }
      ]
    }
  }
  render() {
    return (
      <div>
        <center><h1> Demo</h1></center>
        <div>
          {this.state.data.map((d, i) => <Content key={i} componentData={d} />)}
        </div>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <div className="main">
        <br />
        <div>Component Key : {this.props.componentData.id} & Data : {this.props.componentData.component}</div>
      </div>
    );
  }
}
export default Ex10;