import axios from "axios"

export class AxiosInstance {
  static _instance

  static create() {
    if (AxiosInstance._instance !== "object") {
      AxiosInstance._instance = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/${
          import.meta.env.VITE_APP_API_SLUG
        }`,
      })
    }

    return AxiosInstance._instance
  }
}
