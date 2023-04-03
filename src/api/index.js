import todo from "./todo"

export default function (axios, apiVersion) {
  return {
    todo: todo(axios, apiVersion),
  }
}
