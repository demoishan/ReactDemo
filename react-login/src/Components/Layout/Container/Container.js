import React from 'react';

import './Container.css';

import { Container } from 'react-bootstrap';

function ContentDiv(props) {
    return (
        <div className="containerDiv">
            <Container fluid>
                {props.children}
            </Container>
        </div>
    )
}

export default ContentDiv;