import auth from "./auth"
import user from "./user"

export default function (axios, apiVersion) {
  return {
    auth: auth(axios, apiVersion),
    user: user(axios, apiVersion),
  }
}
