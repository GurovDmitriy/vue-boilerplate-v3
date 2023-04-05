export default function (axios, apiVersion) {
  // eslint-disable-next-line no-unused-vars
  const base = `/${apiVersion}/user`

  return {
    // eslint-disable-next-line no-unused-vars
    info() {
      // return axios.post(`${base}/info`)

      // TODO: example
      return {
        name: "john wick",
        age: 32,
        role: "admin",
      }
    },
  }
}
