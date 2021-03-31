import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


function Post(props) {
    const { post } = props

    return (
        <Col md={4} className="mb-4">
            <p to={'post/' + "post.id"}>
                <img className="img-thumbnail" src="https://i0.wp.com/www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-images-1.jpg?resize=450%2C400&ssl=1" 
                alt="aa" />
                <small>
                   post.caption
                </small>
            </p>

            <span
                className="text-danger float-right"
                style={{ cursor: 'pointer' }}
             
            >X</span>
        </Col>
    )
}


export default Post