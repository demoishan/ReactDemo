import React from 'react'
import { Row } from 'reactstrap'
import PostItem from './Post/Post.jsx'

function PostList(props) {
    return (
        <Row className="mt-4">
            <PostItem />
        </Row>
    )
}

export default PostList