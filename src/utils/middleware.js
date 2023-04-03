export function middleware(data, middlewareArr, cb) {
  if (middlewareArr.length === 0) return cb(data)

  let newArr = middlewareArr.slice(1)

  function next(data) {
    const prev = newArr.slice()
    newArr = prev.slice(1)

    if (prev.length) return prev[0](data, cb)

    return cb(data)
  }

  return middlewareArr[0](data, next)
}

// example usage

// import { loggerExample } from "~/api/middleware/loggerExample"
// import { loggerAsyncExample } from "~/api/middleware/loggerAsyncExample"
//
// const {$api} = useNuxtApp()
//
// const data = {id: 1}
//
// const middles = [loggerExample, loggerAsyncExample]
//
// async function getTodoById(data) {
//    const res = $api.todos.getById(data)
//    console.log(res)
// }
//
// function fetchTodo() {
//   middleware(data, middles, getTodoById)
// }
//
// example write middleware
//
// import { getClone } from "~/utils/getClone"
//
// export function loggerAsyncExample(data, next) {
//   console.log("logger async")
//   console.log(data)
//
//   setTimeout(() => {
//     console.log("timer")
//
//     const dataClone = getClone(data)
//     // ... other mutation dataClone
//
//     return next(dataClone)
//   }, 2000)
// }
