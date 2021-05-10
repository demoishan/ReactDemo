import axios from 'axios'
import { baseUrl } from '../Config/Config'

export function login(credentials) {
  return axios.post(baseUrl + '/login/login', credentials)
    .then(result => {
      localStorage.setItem('user', JSON.stringify(result.data))
      return result.data
    })
}

export function logout() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}