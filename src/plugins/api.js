import apiPoints from "../api"
import { AxiosInstance } from "../tools/AxiosInstance"
import { apiSettings } from "../tools/constants"

export default {
  install(app) {
    const axiosInstance = AxiosInstance.create()

    const api = apiPoints(axiosInstance, apiSettings.version)

    app.config.globalProperties.$api = api
    app.provide("$api", api)
  },
}
