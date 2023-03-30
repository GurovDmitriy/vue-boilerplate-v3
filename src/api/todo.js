export default function (axios) {
  return {
    getById(payload) {
      const id = payload.id

      return axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
    },
  }
}
