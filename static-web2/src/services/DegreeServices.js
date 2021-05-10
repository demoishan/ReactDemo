import { baseUrl } from '../Config/Config'
import axios from 'axios'

export function getAllDegree() {
    return  axios.get(baseUrl + "/api/Degree/getAllDegree")
      .then(result => {
        const data = result.data
        return data
      })
  }
  