import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { degreeReducer } from './degreeReducer'

// import { postReducer } from './postReducer'
export default combineReducers({
  //   posts: postReducer,
  degree: degreeReducer,
  user: userReducer
})