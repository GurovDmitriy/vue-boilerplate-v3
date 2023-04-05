import { token } from "./constants"

function setTokenLS(value) {
  localStorage.setItem(token.name, `${token.type} ${value}`)
}

function getTokenLS() {
  return `${token.type} ${localStorage.getItem(token.name)}`
}

function removeTokenLS() {
  localStorage.removeItem(token.name)
}

export { setTokenLS, getTokenLS, removeTokenLS }
