import todo from "./todo"

export default function (axios) {
  return {
    todo: todo(axios),
  }
}
