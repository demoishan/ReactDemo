import axios from 'axios'
import { baseUrl } from '../config/api'
import Post from '../models/Post'

const apiUrl = baseUrl + '/posts/'

export function addPost(post) {
  post.createdBy = '12345asf'
  return axios.post(apiUrl + "add", post)
    .then(result => {
      const post = result.data
      return new Post(
        post.id,
        post.caption,
        post.description,
        post.imageUrl
      )
    })
}

export function getPosts() {
  return axios.get(apiUrl + "getAllPosts")
    .then(result => {
      const posts = result.data
      return posts.map(post => {
        return new Post(
          post.id,
          post.caption,
          post.description,
          post.imageUrl
        )
      })
    })
}

export function removePost(id) {
  return axios.delete(apiUrl + 'delete/' + id)
}

export function getSinglePost(id) {
  return axios.get(apiUrl + '/getSinglePost/' + id)
    .then(result => new Post(
      result.data._id,
      result.data.caption,
      result.data.description,
      result.data.imageUrl
    ))
}