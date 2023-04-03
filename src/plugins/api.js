import apiPoints from "../api"
import { AxiosInstance } from "../tools/AxiosInstance"

export default {
  install(app) {
    const axiosInstance = AxiosInstance.create()

    const api = apiPoints(axiosInstance, import.meta.env.VITE_APP_API_VERSION)

    app.config.globalProperties.$api = api
    app.provide("$api", api)
  },
}
