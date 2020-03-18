import React from 'react';
import Contacts from './Contacts'

class ContactUS extends React.Component {
    state = {
        contacts: [],
        title: "Please wait...."
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data, title: 'Contact List' })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div>
                <Contacts contacts={this.state.contacts} title={this.state.title} />
            </div>
        );
    }
}
export default ContactUS;