import Cookies from "universal-cookie"
import { token } from "./constants"

const cookies = new Cookies()

function setTokenCO(value) {
  cookies.set(token.name, `${token.type} ${value}`)
}

function getTokenCO() {
  cookies.get(token.name)
}

function removeTokenCO() {
  cookies.remove(token.name)
}

export { setTokenCO, getTokenCO, removeTokenCO }
