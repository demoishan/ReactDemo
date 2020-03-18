import React from 'react';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

class Ex13 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Ishan',
            Id: '101'
        }
    }
    render() {
        // var randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey
        const shortName = uniqueNamesGenerator({
            dictionaries: [animals, colors, adjectives], // colors can be omitted here as not used
            length: 1
        });

        setTimeout(() => { this.setState({ name: shortName, Id: Math.floor(Math.random() * 101) }) }, 2000)
        return (
            <div>
                <center><h1>Simple</h1></center>
                <div>
                    <h1>Hello {this.state.name}</h1>
                    <h2>Your Id is {this.state.Id}</h2>
                </div>
            </div>
        );
    }
}
export default Ex13;