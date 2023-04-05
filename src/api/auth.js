export default function (axios, apiVersion) {
  // eslint-disable-next-line no-unused-vars
  const base = `/${apiVersion}/auth`

  return {
    // eslint-disable-next-line no-unused-vars
    signUp(payload, options) {
      // const data = {
      //   email: payload.email,
      //   password: payload.password,
      // }

      // return axios.post(`${base}/sign-up`, data, options)

      // TODO: example
      return { token: 112233445566 }
    },

    // eslint-disable-next-line no-unused-vars
    signIn(payload, options) {
      // const data = {
      //   email: payload.email,
      //   password: payload.password,
      // }

      // return axios.post(`${base}/sign-in`, data, options)

      // TODO: example
      return { token: 555555555555 }
    },

    // eslint-disable-next-line no-unused-vars
    signOut() {
      // return axios.post(`${base}/sign-out`)

      // TODO: example
      return null
    },
  }
}
