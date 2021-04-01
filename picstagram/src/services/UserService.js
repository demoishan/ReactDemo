import axios from 'axios'
import { baseUrl } from '../config/api'

export function login(credentials) {
  return axios.post(baseUrl + '/login/login', credentials)
    .then(result => {
      localStorage.setItem('user', JSON.stringify(result.data.name))
      return result.data
    })
}

export function logout() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}