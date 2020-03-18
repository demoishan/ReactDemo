import React from 'react';
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="https://www.flaticon.com/premium-icon/icons/svg/2686/2686771.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: 100, width: 100 }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <center><h1>Render Props(this.props.render) Demo</h1></center>
                <center><h2>Move the mouse around!</h2></center>
                <Mouse render={mouse => (<Cat mouse={mouse} />)} />
            </div>
        );
    }
}
export default MouseTracker;