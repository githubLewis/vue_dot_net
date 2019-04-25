import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:59846',
  json: true
})

export default {
    async execute (method, resource, data) {
      // inject the accessToken for each request
      // let accessToken = await Vue.prototype.$auth.getAccessToken()
      return client({
        method,
        url: resource,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
        /*
        headers: {
          Authorization: `Bearer ${accessToken}`
        }*/
      }).then(req => {
        return req.data
      }).catch()
      .finally()
    },
    getAudience () {
      return this.execute('get', '/audience/list')
    }
  }