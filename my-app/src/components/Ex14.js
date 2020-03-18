import React from 'react';
import ReactDOM from 'react-dom';
class Ex14 extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { sayings: '' };
    // }
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            sayings: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    update(e) {
        // this.setState({ sayings: e.target.value });
        this.setState({ sayings: this.refs.btalk.value });
    }
    onFocus() {
        console.log("OnFocus call...");
        document.getElementById("myId").style.backgroundColor = "red";
    }
    updateState(e) {
        this.setState({data: e.target.value});
     }
     clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
     }
    render() {
        return (
            <div>
                <center><h1>Reg Demo</h1></center>
                <div>
                    Say: <input type="text" ref="btalk" onChange={this.update.bind(this)} />
                    {this.state.sayings}
                </div>
                <div>
                    Bob <input type="text" id="myId" onFocus={this.onFocus.bind(this)} />
                    <br />
                    Tim <input type="text" id="myId" onFocus={this.onFocus.bind(this)} />
                </div>
                <div>
                    <input value={this.state.data} onChange={this.updateState}
                        ref="myInput"></input>
                    <button onClick={this.clearInput}>CLEAR</button>
                    <h4>{this.state.data}</h4>
                </div>
            </div>
        );
    }
}
export default Ex14;