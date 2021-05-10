import * as DegreeServices  from '../services/DegreeServices'


export const GET_DEGRREE = 'GET_DEGREE'


export const getDegreeAction = () => {
    return (dispatch) => {
        DegreeServices.getAllDegree()
        .then((data) => {
          dispatch({
            type: GET_DEGRREE,
            data
          })
        })
    }
  }
