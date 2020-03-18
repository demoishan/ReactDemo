import React from 'react'
import '../index.css';


const Contacts = ({ contacts, title }) => {
    return (
        <div className="main">
            <br />
            <center><h1>{title}</h1></center>
            {contacts.map((contact, index) => (
                <div key={index}>
                    <div >
                        <h5>{contact.name}</h5>
                        <h6>{contact.email}</h6>
                        <p>{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts