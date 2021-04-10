import React, { Fragment } from 'react'

import Profile from './Profile/Profile.jsx'
import PostForm from './PostForm/PostForm'
import PostDetail from './Profile/PostDetail/PostDetail'
import NewForm from './NewForm/NewForm'

import UserRoute from '../../routes/UserRoute'

function Picstagram(props) {
    return (
      <Fragment>
        <UserRoute path='/profile' component={Profile} />
        <UserRoute path='/add' component={PostForm} />
        <UserRoute path='/post/:id' component={PostDetail} />
        <UserRoute path='/add2' component={NewForm} />
      </Fragment>
    )    
}

export default Picstagram