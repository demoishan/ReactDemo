import { GET_DEGRREE } from '../actions/degreeActions'

export function degreeReducer(state = null, action) {
  switch(action.type) {
    case GET_DEGRREE:
      return action.degree
      
    default:
      return state
  }
}