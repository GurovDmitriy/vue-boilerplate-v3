export default function (axios, apiVersion) {
  return {
    getById(payload, options) {
      const id = payload.id

      return axios.get(`${apiVersion}/todos/${id}`, options)
    },
  }
}
