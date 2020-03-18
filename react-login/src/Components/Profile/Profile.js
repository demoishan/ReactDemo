import React from 'react';

import { Modal, Media, Row, Col, Button, Alert } from 'react-bootstrap';

import './Profile.css';

function Profile(props) {
    return (
        <React.Fragment>
            {
                props.showProfile &&
                <Modal show={props.showProfile} onHide={props.closeProfile}>
                    <Modal.Header closeButton>
                        <Modal.Title>My Profile</Modal.Title>
                    </Modal.Header>
                    {props.error ?
                        <Modal.Body>
                            <Alert className="custom-alert" variant="danger">
                                {props.error}
                            </Alert>
                        </Modal.Body>
                        :
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <Media>
                                        <img src={props.user.avatar} className="m-auto avatar" alt="User Profile" />
                                    </Media>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={3}><strong>Email Id</strong></Col>
                                <Col>{props.user.email}</Col>
                            </Row>
                            <Row>
                                <Col sm={3}><strong>First Name</strong></Col>
                                <Col>{props.user.first_name}</Col>
                            </Row>
                            <Row>
                                <Col sm={3}><strong>Last Name</strong></Col>
                                <Col>{props.user.last_name}</Col>
                            </Row>
                        </Modal.Body>
                    }
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.closeProfile}>Close</Button>
                        {/* <Button variant="primary">Save changes</Button> */}
                    </Modal.Footer>
                </Modal >
            }
        </React.Fragment>
    );
}

export default Profile;