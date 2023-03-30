import apiPoints from "../api"
import { AxiosInstance } from "../tools/AxiosInstance"

export default {
  install(app) {
    const axiosInstance = AxiosInstance.create()

    const api = apiPoints(axiosInstance)

    app.config.globalProperties.$api = api
    app.provide("$api", api)
  },
}
