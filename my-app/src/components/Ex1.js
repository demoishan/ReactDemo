//////////// My Example 1
import React from 'react';
class Ex1 extends React.Component {
    render() {
        var myStyle = {
            fontSize: 25,
            color: '#FF0000'
        }

        return (
            <div className="main">
                <br />
                <center><h6>Custome style using React</h6></center>
                <h1 style={myStyle}>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
                <p data-myattribute="somevalue">This is the content With attrubute!!!</p>
                <h1>{1 + 1}</h1>
            </div>
        );
    }
}

export default Ex1;