import React from 'react';
import { Logout1 } from "../../APIServices/HttpCall"
class Logout extends React.Component {

    constructor(props) {
        super(props);
        Logout1()
        this.props.history.push('/login')
    }

    componentWillMount() {
        console.log('Component componentWillMount!')
    }
    render() {
        return (
            <>
                <main id="main">
                    <section className="skills" >
                        <div className="container">
                            <div className="section-title">
                                <p>Logout</p>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }

}

export default Logout;