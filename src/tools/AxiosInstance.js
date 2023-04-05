import axios from "axios"
import { apiSettings } from "./constants"
import { getTokenCO, removeTokenCO } from "./cookiesPersist"
import { getTokenLS, removeTokenLS } from "./storagePersist"

export class AxiosInstance {
  static _instance

  static create() {
    if (AxiosInstance._instance !== "object") {
      AxiosInstance._instance = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/${apiSettings.slug}`,
      })

      AxiosInstance._instance.interceptors.request.use((request) => {
        request.headers.authorization = getTokenCO || getTokenLS()
        return request
      })

      AxiosInstance._instance.interceptors.response.use(
        (response) => response,
        ({ response }) => {
          const fallback = { message: "Error server" }

          if (!response) {
            return Promise.reject(fallback)
          }
          if (response.status === 401) {
            removeTokenCO()
            removeTokenLS()
          }

          return Promise.reject(
            typeof response.data === "object" ? response : fallback
          )
        }
      )
    }

    return AxiosInstance._instance
  }
}
