import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap'

import PostList from './PostList/PostList.jsx'
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'

import { Row, Col } from 'reactstrap'

function Profile(props) {
    return (
        <Fragment>
            <Row>
                <Col>
                    <ProfileHeader />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PostList />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Profile