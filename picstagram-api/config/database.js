const user = process.env.DB_USER || ''
const pass = process.env.DB_PASS || ''
const name =  'test'
const host = 'localhost'
const port = 27017

const creds = user ? `${user}:${pass}@` : '';
const connectionUrl = `mongodb://${host}:${port}/${name}`

module.exports = {
  connectionUrl
}