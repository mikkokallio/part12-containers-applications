import axios from 'axios'
require('dotenv').config()

//let baseUrl = process.env.REACT_APP_BACKEND_URL + '/api/persons'
let baseUrl = 'http://localhost:3001/api/persons'
//process.env.REACT_APP_RUN_MODE === 'heroku' ? baseUrl = 'https://reallyboringapp.herokuapp.com/api/persons' : baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }
